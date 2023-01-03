export const START_INIT = 'START_INIT'
export const SET_PROCESSING = 'SET_PROCESSING'
export const SET_PROCESSING_COMPLETE = 'SET_PROCESSING_COMPLETE'
export const START_PLAY = 'START_PLAY'
export const STOP_PLAY = 'STOP_PLAY'
export const SET_ACTIVE_TRACK = 'SET_ACTIVE_TRACK'
export const SET_TRACK_COMPLETE = 'SET_TRACK_COMPLETE'
export const SKIP_INTRO = 'SKIP_INTRO'

export const PROCESSING = 'processing'
export const IS_PLAYING = 'isPlaying'
export const ACTIVE_TRACK = 'activeTrack'

export function startPlay () {
  return {
    type: START_PLAY,
    payload: { },
  }
}

export function stopPlay () {
  return {
    type: STOP_PLAY,
    payload: { },
  }
}

export function startInit (track) {
  return {
    type: START_INIT,
    payload: { track },
  }
}

export function setProcessing () {
  return {
    type: SET_PROCESSING,
    payload: { },
  }
}

export function setProcessingComplete () {
  return {
    type: SET_PROCESSING_COMPLETE,
    payload: { },
  }
}

export function setTrackComplete () {
  return {
    type: SET_TRACK_COMPLETE,
    payload: { },
  }
}

export function setActiveTrack (track) {
  return {
    type: SET_ACTIVE_TRACK,
    payload: { track },
  }
}

export function skipIntro () {
  return {
    type: SKIP_INTRO,
    payload: { },
  }
}