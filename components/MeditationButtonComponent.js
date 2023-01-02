import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

export default class MeditationButtonComponent extends React.Component {
  render () {
    const { props } = this
    const {
      label,
      onPress,
      keyPrefix,
      processing,
    } = props
    return (
      <View style={styles.meditationButtonView}>
        <TouchableOpacity
          key={`${keyPrefix}_opacity`}
          accessible={true}
          accessibilityLabel={label}
          style={styles.meditationButtonOpacity}
          activeOpacity={0.5}
          onPress={onPress}
          disabled={processing}
        >
          <Text
            key={`${keyPrefix}_text`}
            style={styles.meditationButton}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

MeditationButtonComponent.propTypes = {
  keyPrefix: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
