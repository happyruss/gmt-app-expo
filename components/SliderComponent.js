import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
} from 'react-native'
import Slider from '@react-native-community/slider'
import styles from '../styles'

export default class SliderComponent extends React.Component {
  render () {
    const { props } = this
    return (
      <View key={`${props.keyPrefix}_container`} style={styles.controlContainer}>
        <Text
          key={`${props.keyPrefix}_label`}
          style={styles.sliderLabel}
        >
          {`${props.label}`}
        </Text>
        <Slider
          minimumTrackTintColor="white"
          maximumTrackTintColor="#445"
          thumbTintColor="#fff"
          key={`${props.keyPrefix}_slider`}
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          onSlidingComplete={props.onValueChange}
          value={props.sliderValue}
        />
      </View>
    )
  }
}

SliderComponent.propTypes = {
  keyPrefix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  sliderValue: PropTypes.number.isRequired,
}
