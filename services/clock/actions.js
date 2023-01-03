export const SET_REMAINING_SECONDS = 'SET_REMAINING_SECONDS'
export const INPUT_ERROR = 'INPUT_ERROR'
export const SET_DURATION_MILLISECONDS = 'SET_DURATION_MILLISECONDS'

export const SECONDS_REMAINING = 'secondsRemaining'
export const DURATION_MS = 'durationMs'

export function setRemainingSeconds (seconds) {
  if (Number.isNaN(seconds)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The seconds argument is required to be a number' },
    }
  }
  return {
    type: SET_REMAINING_SECONDS,
    payload: { seconds },
  }
}

export function setDurationMilliseconds (ms) {
  if (Number.isNaN(ms)) {
    return {
      type: INPUT_ERROR,
      payload: { message: 'The seconds argument is required to be a number' },
    }
  }
  return {
    type: SET_DURATION_MILLISECONDS,
    payload: { ms },
  }
}
