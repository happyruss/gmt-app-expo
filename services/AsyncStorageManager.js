import AsyncStorage from '@react-native-async-storage/async-storage'
import InitialPreset from '../initialPreset.json'

const CURRENT_PRESET = 'CURRENT_PRESET'

export async function retrieveInitialPreset () {
  const current = await AsyncStorage.getItem(CURRENT_PRESET)
  if (current !== null) {
    return JSON.parse(current)
  }
  return InitialPreset

}

export async function savePreset (preset) {
  await AsyncStorage.setItem(CURRENT_PRESET, JSON.stringify(preset))
}