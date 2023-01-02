import React from 'react'
import { connect as connectRedux } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import _isNull from 'lodash/isNull'
import PropTypes from 'prop-types'
import styles from '../styles'
import assets from '../assets/assets'
import {
  startPlay as startPlayAction,
  stopPlay as stopPlayAction,
  IS_PLAYING, ACTIVE_TRACK,
} from '../services/player/actions'

const { pause, play } = assets

class PlayComponent extends React.Component {
  render = () => {
    const { props } = this
    const { startPlay, stopPlay, player } = props
    const isPlaying = player.get(IS_PLAYING)
    const isVisible = !_isNull(player.get(ACTIVE_TRACK))
    return (isVisible
      && <View key="playButtonView" style={styles.playButtonContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Play or Pause'}
          style={styles.playButtonOpacity}
          activeOpacity={0.5}
          onPress={() => {
            if (isPlaying) {
              stopPlay()
            } else {
              startPlay()
            }
          }}
        >
          <Image
            source={player.get(IS_PLAYING) ? pause : play}
            style={styles.playButton}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

PlayComponent.propTypes = {
  startPlay: PropTypes.func.isRequired,
  stopPlay: PropTypes.func.isRequired,
}

export default connectRedux(
  (state) => ({ player: state.player, preset: state.preset }),
  (dispatch) => bindActionCreators({
    startPlay: startPlayAction,
    stopPlay: stopPlayAction,
  }, dispatch),
)(PlayComponent)
