import React from 'react'
import { Audio, InterruptionModeAndroid } from 'expo-av'
import { connect as connectRedux } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  ImageBackground,
} from 'react-native'
import { InterruptionModeIOS } from 'expo-av/build/Audio.types'
import blackBackground from '../assets/blackBackground.jpeg'
import HeaderComponent from './HeaderComponent'
import styles from '../styles'
import ControlsComponent from './ControlsComponent'
import PlayComponent from './PlayComponent'
import {
  setInitialPreset as setInitialPresetAction,
} from '../services/preset/actions'

class MainComponent extends React.Component {
  async componentDidMount () {
    const { props } = this
    const { setInitialPreset } = props
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      playThroughEarpieceAndroid: false,
    })
    setInitialPreset()
  }

  renderControls () {
    return (
      <View key="mainViewContainer" style={styles.mainContainer}>
        <HeaderComponent />
        <ControlsComponent />
        <PlayComponent />
      </View>
    )
  }

  render () {
    const renderArray = [this.renderControls()]
    return (
        <ImageBackground
            key="imageBackground"
            style={styles.imageBackground}
            source={blackBackground}
        >
          {renderArray}
        </ImageBackground>
    )
  }
}

MainComponent.propTypes = {
}

export default connectRedux(
  (state) => ({ player: state.player, preset: state.preset, presets: state.presets }),
  (dispatch) => bindActionCreators({
    setInitialPreset: setInitialPresetAction,
  }, dispatch),
)(MainComponent)
