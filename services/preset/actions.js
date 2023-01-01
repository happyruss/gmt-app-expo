export const INPUT_ERROR = 'inputError'
export const BINAURAL_VOLUME = 'binauralVolume'
export const IS_ISOCHRONIC = 'isIsochronic'
export const VOICE_VOLUME = 'voiceVolume'
export const NATURE_VOLUME = 'natureVolume'
export const NOISE_VOLUME = 'noiseVolume'

export const SET_BINAURAL_VOLUME = 'SET_BINAURAL_VOLUME'
export const SET_VOICE_VOLUME = 'SET_VOICE_VOLUME'
export const SET_NATURE_VOLUME = 'SET_NATURE_VOLUME'
export const SET_NOISE_VOLUME = 'SET_NOISE_VOLUME'
export const SET_IS_ISOCHRONIC = 'SET_IS_ISOCHRONIC'
export const SET_INITIAL_PRESET = 'SET_INITIAL_PRESET'
export const SET_PRESET = 'SET_PRESET'

export function setInitialPreset () {
  return {
    type: SET_INITIAL_PRESET,
    payload: { },
  }
}

export function setPreset (preset) {
  return {
    type: SET_PRESET,
    payload: { preset },
  }
}

export function setBinauralVolume (volume) {
  if (Number.isNaN(volume)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The volume argument is required to be a number' },
    }
  }
  return {
    type: SET_BINAURAL_VOLUME,
    payload: { volume },
  }
}

export function setVoiceVolume (volume) {
  if (Number.isNaN(volume)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The volume argument is required to be a number' },
    }
  }
  return {
    type: SET_VOICE_VOLUME,
    payload: { volume },
  }
}

export function setNatureVolume (volume) {
  if (Number.isNaN(volume)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The volume argument is required to be a number' },
    }
  }
  return {
    type: SET_NATURE_VOLUME,
    payload: { volume },
  }
}

export function setNoiseVolume (volume) {
  if (Number.isNaN(volume)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The volume argument is required to be a number' },
    }
  }
  return {
    type: SET_NOISE_VOLUME,
    payload: { volume },
  }
}

export function setIsIsochronic (isIsochronic) {
  return {
    type: SET_IS_ISOCHRONIC,
    payload: { isIsochronic },
  }
}
