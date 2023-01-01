import { StyleSheet } from 'react-native'

const buttonBackground = '#444'

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  meditationButtonView: {
    width: '25%',
    height: '100%',
  },
  fullContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '25%',
  },
  meditationButtonContainer: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
  },
  clockContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 24,
    color: '#ffffff',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  binauralSwitch: {
    marginTop: 0,
    marginLeft: 40,
    marginBottom: 40,
  },
  controlContainer: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  slider: {
    width: '50%',
  },
  sliderLabel: {
    width: '25%',
    height: 20,
    marginLeft: 30,
    marginTop: 10,
    color: '#fff',
  },
  timerLabel: {
    width: '25%',
    height: 20,
    marginLeft: 30,
    color: '#fff',
    fontFamily: 'System',
    fontSize: 20,
  },
  buttonItem: {
    width: '25%',
    height: '100%',
    marginLeft: 60,
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#000',
  },

  sliderButtonItem: {

  },

  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  blankContainer: {
    flex: 0,
    height: 1,
  },
  slidersContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    height: '60%',
  },
  switchAndTimerContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
  },
  playButtonContainer: {
    height: '15%',
    backgroundColor: buttonBackground,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  playButton: {
    height: 70,
    width: 70,
  },
  playButtonOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webView: {
    height: 1,
  },
  regularButton: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'white',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
  regularButtonOpacity: {
    flex: 1,
    backgroundColor: buttonBackground,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  clockButton: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
  },
  clockButtonOpacity: {
    flex: 1,
    backgroundColor: buttonBackground,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  headerButtonOpacity: {
    flex: 1,
    backgroundColor: buttonBackground,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  meditationButton: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
  meditationButtonOpacity: {
    flex: 1,
    backgroundColor: buttonBackground,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
})

export { styles as default }
