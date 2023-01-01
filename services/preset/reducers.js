import { Map } from 'immutable'
import InitialPreset from '../../initialPreset.json'
import {
  SET_VOICE_VOLUME,
  SET_BINAURAL_VOLUME,
  SET_NATURE_VOLUME,
  SET_NOISE_VOLUME,
  SET_IS_ISOCHRONIC,
  BINAURAL_VOLUME,
  VOICE_VOLUME,
  NATURE_VOLUME,
  NOISE_VOLUME,
  IS_ISOCHRONIC,
  SET_PRESET,
} from './actions'

/**
 * A list of auto model Maps
 */
const initialState = Map(InitialPreset)

/**
 * Audio models redux reducer
 * @param {Object} state The redux state or initial state
 * @param {Object} action The redux action
 */
export default function reducerPreset (state = initialState, action) {
  switch (action.type) {
    case SET_PRESET: {
      const { payload: { preset } = {} } = action
      return Map(preset)
    }
    case SET_BINAURAL_VOLUME: {
      const { payload: { volume } = {} } = action
      return state.set(BINAURAL_VOLUME, volume)
    }
    case SET_VOICE_VOLUME: {
      const { payload: { volume } = {} } = action
      return state.set(VOICE_VOLUME, volume)
    }
    case SET_NATURE_VOLUME: {
      const { payload: { volume } = {} } = action
      return state.set(NATURE_VOLUME, volume)
    }
    case SET_NOISE_VOLUME: {
      const { payload: { volume } = {} } = action
      return state.set(NOISE_VOLUME, volume)
    }
    case SET_IS_ISOCHRONIC: {
      const { payload: { isIsochronic } = {} } = action
      return state.set(IS_ISOCHRONIC, isIsochronic)
    }
    default:
      return state
  }
}
