import React from 'react'
import * as Linking from 'expo-linking'
import { connect as connectRedux } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from '../styles'
import MeditationButtonComponent from './MeditationButtonComponent'
import { PROCESSING, startInit as startInitAction } from '../services/player/actions'

class HeaderComponent extends React.Component {
  render () {
    const { props } = this
    const { startInit, player } = props
    const processing = player.get(PROCESSING)
    return (
      <View style={styles.fullContainer}>
        <View key="headerContainer" style={styles.headerContainer}>
          <TouchableOpacity
            key="HeaderButtonOpacity"
            accessible={true}
            accessibilityLabel={'Go to Website...'}
            style={styles.headerButtonOpacity}
            activeOpacity={0.5}
            onPress={() => Linking.openURL('http://www.guidedmeditationtreks.com/v2.html')}
          >
            <Text
              key="headerButtonText"
              style={styles.clockButton}>
              Meditation Treks
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.meditationButtonContainer}>
          <MeditationButtonComponent
            keyPrefix="meet"
            onPress={() => {
              startInit(0)
            }}
            label="Cleanse a Drama Cycle"
            processing={processing}
          />
          <MeditationButtonComponent
            keyPrefix="relat"
            onPress={() => {
              startInit(1)
            }}
            label="Ask Your Higher Self a Question"
            processing={processing}
          />
          <MeditationButtonComponent
            keyPrefix="repro"
            onPress={() => {
              startInit(2)
            }}
            label="Program a Quartz Crystal"
            processing={processing}
          />
          <MeditationButtonComponent
            keyPrefix="mani"
            onPress={() => {
              startInit(3)
            }}
            label="Send Helpful Thoughts"
            processing={processing}
          />
        </View>
      </View>
    )
  }
}

HeaderComponent.propTypes = {
}

export default connectRedux((state) => ({ player: state.player, preset: state.preset }),
  (dispatch) => bindActionCreators({
    startInit: startInitAction,
  }, dispatch),
)(HeaderComponent)
