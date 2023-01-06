import React from 'react'
import { bindActionCreators } from 'redux'
import {
  View,
  Switch, Text, Button,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect as connectRedux } from 'react-redux'
import styles from '../styles'
import {
  setVoiceVolume as setVoiceVolumeAction,
  setBinauralVolume as setBinauralVolumeAction,
  setNatureVolume as setNatureVolumeAction,
  setNoiseVolume as setNoiseVolumeAction,
  setIsIsochronic as setIsIsochronicAction,
  BINAURAL_VOLUME,
  VOICE_VOLUME,
  NOISE_VOLUME,
  NATURE_VOLUME,
  IS_ISOCHRONIC,
} from '../services/preset/actions'
import { ACTIVE_TRACK, skipIntro as skipIntroAction } from '../services/player/actions'
import SliderComponent from './SliderComponent'
import { SECONDS_REMAINING } from '../services/clock/actions'
import assets from '../assets/assets'

const { crystalEndIntroMs } = assets
const crystalEndIntroSeconds = crystalEndIntroMs / 1000

class ControlsComponent extends React.Component {
  resetContext = (isIsochronic) => {
    const { props } = this
    const { setIsIsochronic } = props
    setIsIsochronic(isIsochronic)
  }

  render = () => {
    const { props } = this
    const {
      preset,
      setVoiceVolume,
      setNoiseVolume,
      setNatureVolume,
      setBinauralVolume,
      setIsIsochronic,
      skipIntro,
      clock,
      player,
    } = props
    const activeTrack = player.get(ACTIVE_TRACK)
    const secondsRemaining = clock.get(SECONDS_REMAINING)
    let timerLabelValue = ''
    if (secondsRemaining) {
      const minutes = Math.floor(secondsRemaining / 60)
      const seconds = secondsRemaining - minutes * 60
      timerLabelValue = `${minutes}:${String(seconds).padStart(2, '0')}`
    }
    const brainwaveLabel = preset.get(IS_ISOCHRONIC) ? 'Isochronic' : 'Binaural'
    return (
      <View key="controlsContainer" style={styles.slidersContainer}>
        <SliderComponent
          key="voice"
          keyPrefix="voice"
          onValueChange={(itemValue) => {
            setVoiceVolume(itemValue)
          }}
          label="Voice"
          sliderValue={preset.get(VOICE_VOLUME)}
        />
        <SliderComponent
          key="nature"
          keyPrefix="nature"
          onValueChange={(itemValue) => {
            setNatureVolume(itemValue)
          }}
          label="Nature"
          sliderValue={preset.get(NATURE_VOLUME)}
        />
        <SliderComponent
          key="noise"
          keyPrefix="noise"
          onValueChange={(itemValue) => {
            setNoiseVolume(itemValue)
          }}
          label="Music"
          sliderValue={preset.get(NOISE_VOLUME)}
        />
        <SliderComponent
          key="entrainment"
          keyPrefix="entrainment"
          onValueChange={(itemValue) => {
            setBinauralVolume(itemValue)
          }}
          label={brainwaveLabel}
          sliderValue={preset.get(BINAURAL_VOLUME)}
        />
        <View key="switchContainer" style={styles.switchAndTimerContainer}>
          {
            activeTrack !== 1
              ? <Switch
                style={styles.binauralSwitch}
                key="entrainmentType"
                onValueChange={(value) => setIsIsochronic(value)}
                value={preset.get(IS_ISOCHRONIC)}
                />
              : null
        }
          <Text
            key="timer_label"
            style={styles.timerLabel}
          >
            {`${timerLabelValue}`}
          </Text>
          {
            activeTrack === 2 && secondsRemaining > crystalEndIntroSeconds
              ? <Button
                title={'Skip Intro'}
                style={styles.buttonItem}
                onPress={ () => skipIntro()}
                />
              : null
          }
        </View>
      </View>
    )
  }
}

ControlsComponent.propTypes = {
  setBinauralVolume: PropTypes.func.isRequired,
  setIsIsochronic: PropTypes.func.isRequired,
  setNatureVolume: PropTypes.func.isRequired,
  setNoiseVolume: PropTypes.func.isRequired,
  setVoiceVolume: PropTypes.func.isRequired,
}

export default connectRedux((state) => ({
  ui: state.ui,
  preset: state.preset,
  clock: state.clock,
  player: state.player,
}),
(dispatch) => bindActionCreators({
  setBinauralVolume: setBinauralVolumeAction,
  setNatureVolume: setNatureVolumeAction,
  setIsIsochronic: setIsIsochronicAction,
  setVoiceVolume: setVoiceVolumeAction,
  setNoiseVolume: setNoiseVolumeAction,
  skipIntro: skipIntroAction,
}, dispatch),
)(ControlsComponent)
