import { Map } from 'immutable'
import {
  DURATION_MS,
  SECONDS_REMAINING, SET_DURATION_MILLISECONDS,
  SET_REMAINING_SECONDS,
} from './actions'

/**
 * A list of auto model Maps
 */
const initialState = Map({
  [SECONDS_REMAINING]: 0,
  [DURATION_MS]: 0,
})

/**
 * Audio models redux reducer
 * @param {Object} state The redux state or initial state
 * @param {Object} action The redux action
 */
export default function reducerClock (state = initialState, action) {
  switch (action.type) {
    case SET_REMAINING_SECONDS: {
      const { payload: { seconds } = {} } = action
      return state.set(SECONDS_REMAINING, seconds)
    }
    case SET_DURATION_MILLISECONDS: {
      const { payload: { ms } = {} } = action
      return state.set(DURATION_MS, ms)
    }
    default:
      return state
  }
}
