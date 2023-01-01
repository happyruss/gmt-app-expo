import { createStore as createStoreRedux, applyMiddleware, combineReducers } from 'redux'
import reducerPlayer from '../services/player/reducers'
import reducerPreset from '../services/preset/reducers'
import middleware from '../services/middleware'
import reducerClock from '../services/clock/reducers'

/**
 * Create all of the redux reducers
 */
export function getRootReducer () {
  return combineReducers({
    player: reducerPlayer,
    preset: reducerPreset,
    clock: reducerClock,
  })
}

/**
 * Create a redux store optionally passing in initial state
 * @param {Object.<string, import('immutable').Map|import('immutable').List>} initialState An
 * initial redux state
 */
export function createStore (initialState) {
  return createStoreRedux(
    getRootReducer(), initialState, applyMiddleware(middleware),
  )
}
