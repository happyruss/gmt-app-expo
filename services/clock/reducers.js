import { Map } from 'immutable'
import {
  SECONDS_REMAINING,
  SET_REMAINING_SECONDS,
} from './actions'

/**
 * A list of auto model Maps
 */
const initialState = Map({
  [SECONDS_REMAINING]: 0,
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
    default:
      return state
  }
}
