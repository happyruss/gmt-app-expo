import { Map } from 'immutable'
import {
  SET_PROCESSING_COMPLETE,
  IS_PLAYING,
  START_INIT,
  ACTIVE_TRACK,
  START_PLAY,
  STOP_PLAY,
  PROCESSING,
  SET_PROCESSING, SET_TRACK_COMPLETE, SET_ACTIVE_TRACK,
} from './actions'

/**
 * A list of auto model Maps
 */
const initialState = Map({
  [PROCESSING]: false,
  [IS_PLAYING]: false,
  [ACTIVE_TRACK]: null,
})

/**
 * Audio models redux reducer
 * @param {Object} state The redux state or initial state
 * @param {Object} action The redux action
 */
export default function reducerPlayer (state = initialState, action) {
  switch (action.type) {
    case START_PLAY: {
      return state.set(IS_PLAYING, true)
    }
    case STOP_PLAY: {
      return state.set(IS_PLAYING, false)
    }
    case START_INIT: {
      return state.set(PROCESSING, true)
    }
    case SET_ACTIVE_TRACK: {
      const { payload: { track } = null } = action
      return state.set(ACTIVE_TRACK, track)
    }
    case SET_PROCESSING: {
      return state.set(PROCESSING, true)
    }
    case SET_PROCESSING_COMPLETE: {
      return state.set(PROCESSING, false)
    }
    case SET_TRACK_COMPLETE: {
      return state.set(ACTIVE_TRACK, null)
    }
    default:
      return state
  }
}
