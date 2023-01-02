import { Audio } from 'expo-av'
import _isNull from 'lodash/isNull'
import spinner from '@expo/simple-spinner'
import { Alert as RnAlert } from 'react-native'
import {
  BINAURAL_VOLUME,
  IS_ISOCHRONIC,
  NATURE_VOLUME,
  NOISE_VOLUME,
  SET_BINAURAL_VOLUME,
  SET_INITIAL_PRESET,
  SET_IS_ISOCHRONIC,
  SET_NATURE_VOLUME,
  SET_VOICE_VOLUME,
  SET_NOISE_VOLUME,
  VOICE_VOLUME,
  setPreset,
} from './preset/actions'
import { retrieveInitialPreset, savePreset } from './AsyncStorageManager'
import {
  START_INIT,
  IS_PLAYING,
  startPlay,
  STOP_PLAY,
  START_PLAY,
  setProcessingComplete,
  setProcessing,
  ACTIVE_TRACK, setActiveTrack, SET_PROCESSING, SET_PROCESSING_COMPLETE,
} from './player/actions'
import assets from '../assets/assets'
import { setRemainingSeconds } from './clock/actions'

const { tracks } = assets
const voiceSoundObject = new Audio.Sound()
const natureSoundObject = new Audio.Sound()
const noiseSoundObject = new Audio.Sound()
const binauralSoundObject = new Audio.Sound()
const isoChronicSoundObject = new Audio.Sound()

function confirmInit (track, store) {
  const state = store.getState()
  const { player } = state
  const { dispatch } = store
  if (!_isNull(player.get(ACTIVE_TRACK))) {
    RnAlert.alert(
      'Meditation Underway',
      'Do you want to start over?',
      [
        {
          text: 'Cancel',
          onPress: () => dispatch(setProcessingComplete()),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => startInit(track, store),
        },
      ],
      { cancelable: true },
    )
  } else {
    startInit(track, store)
  }
}

async function startInit (track, store) {
  const { dispatch } = store
  const state = store.getState()
  const { preset, player } = state
  const binauralVolume = preset.get(BINAURAL_VOLUME)
  const natureVolume = preset.get(NATURE_VOLUME)
  const voiceVolume = preset.get(VOICE_VOLUME)
  const noiseVolume = preset.get(NOISE_VOLUME)
  const isIsochronic = preset.get(IS_ISOCHRONIC)
  const source = tracks[track]
  const {
    voice,
    nature,
    binaural,
    isochronic,
    pinknoise,
  } = source
  if (!_isNull(player.get(ACTIVE_TRACK))) {
    await voiceSoundObject.unloadAsync()
    await natureSoundObject.unloadAsync()
    await binauralSoundObject.unloadAsync()
    await isoChronicSoundObject.unloadAsync()
    await noiseSoundObject.unloadAsync()
  }
  await voiceSoundObject.loadAsync(voice, {
    positionMillis: 0,
    shouldPlay: false,
    volume: voiceVolume,
    isLooping: false,
  })
  voiceSoundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      voiceSoundObject.unloadAsync()
      natureSoundObject.unloadAsync()
      binauralSoundObject.unloadAsync()
      isoChronicSoundObject.unloadAsync()
      noiseSoundObject.unloadAsync()
      dispatch(setActiveTrack(null))
    }
    if (playbackStatus.isPlaying) {
      const remainingSeconds = Math.floor(
        (playbackStatus.durationMillis - playbackStatus.positionMillis) / 1000,
      )
      dispatch(setRemainingSeconds(remainingSeconds))
    }
  })
  await natureSoundObject.loadAsync(nature, {
    positionMillis: 0,
    shouldPlay: false,
    volume: natureVolume,
    isLooping: false,
  })
  await binauralSoundObject.loadAsync(binaural, {
    positionMillis: 0,
    shouldPlay: false,
    volume: isIsochronic ? 0 : binauralVolume,
    isLooping: false,
  })
  await isoChronicSoundObject.loadAsync(isochronic, {
    positionMillis: 0,
    shouldPlay: false,
    volume: isIsochronic ? binauralVolume : 0,
    isLooping: false,
  })
  await noiseSoundObject.loadAsync(pinknoise, {
    positionMillis: 0,
    shouldPlay: false,
    volume: noiseVolume,
    isLooping: false,
  })
  dispatch(setActiveTrack(track))
  dispatch(setProcessingComplete())
  dispatch(startPlay())
}

async function stopPlayer (store) {
  const { dispatch } = store
  dispatch(setProcessing())
  await voiceSoundObject.pauseAsync()
  await natureSoundObject.pauseAsync()
  await binauralSoundObject.pauseAsync()
  await isoChronicSoundObject.pauseAsync()
  await noiseSoundObject.pauseAsync()
  dispatch(setProcessingComplete())
}

async function startPlayer (store) {
  const { dispatch } = store
  dispatch(setProcessing())
  await voiceSoundObject.playAsync()
  await natureSoundObject.playAsync()
  await binauralSoundObject.playAsync()
  await isoChronicSoundObject.playAsync()
  await noiseSoundObject.playAsync()
  dispatch(setProcessingComplete())
}

async function setVolume (soundObject, volume, store) {
  const isActive = !_isNull(store.getState().player.get(ACTIVE_TRACK))
  if (isActive) {
    await soundObject.setVolumeAsync(volume)
  }
}

async function setIsIsochronic (isIsochronic, volume, store) {
  const isActive = !_isNull(store.getState().player.get(ACTIVE_TRACK))
  if (isActive) {
    await binauralSoundObject.setVolumeAsync(isIsochronic ? 0 : volume)
    await isoChronicSoundObject.setVolumeAsync(isIsochronic ? volume : 0)
  }
}

async function assignInitialPreset (store) {
  const { dispatch } = store
  const preset = await retrieveInitialPreset()
  dispatch(setPreset(preset))
}

/**
 * Redux middleware to proxy actions to a webview
 * @param {Object} store The redux store
 */
export default function middleware (store) {
  return (next) => (action) => {
    next(action)
    try {
      const presetStateJs = store.getState().preset.toJS()
      const isPlaying = store.getState().player.toJS()[IS_PLAYING]
      const { type, payload } = action
      switch (type) {
        case SET_PROCESSING:
          spinner.start()
          break
        case SET_PROCESSING_COMPLETE:
          spinner.stop()
          break
        case SET_INITIAL_PRESET:
          assignInitialPreset(store)
          break
        case START_INIT:
          confirmInit(payload.track, store)
          break
        case START_PLAY:
          startPlayer(store)
          break
        case STOP_PLAY:
          stopPlayer(store)
          break
        case SET_VOICE_VOLUME:
          setVolume(voiceSoundObject, presetStateJs[VOICE_VOLUME], store)
          savePreset(presetStateJs)
          break
        case SET_BINAURAL_VOLUME:
          if (presetStateJs.isIsochronic) {
            setVolume(isoChronicSoundObject, presetStateJs[BINAURAL_VOLUME], store)
          } else {
            setVolume(binauralSoundObject, presetStateJs[BINAURAL_VOLUME], store)
          }
          savePreset(presetStateJs)
          break
        case SET_NATURE_VOLUME:
          setVolume(natureSoundObject, presetStateJs[NATURE_VOLUME], store)
          savePreset(presetStateJs)
          break
        case SET_NOISE_VOLUME:
          setVolume(noiseSoundObject, presetStateJs[NOISE_VOLUME], store)
          savePreset(presetStateJs)
          break
        case SET_IS_ISOCHRONIC:
          setIsIsochronic(presetStateJs[IS_ISOCHRONIC], presetStateJs[BINAURAL_VOLUME], store)
          savePreset(presetStateJs)
          break
        default:
          break
      }
    } catch (e) {
      // Do nothing so action handle gets called
    }
  }
}
