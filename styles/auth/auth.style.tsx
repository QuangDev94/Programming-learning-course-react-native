import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  imageStyle: {
    marginTop: 50,
    width: '60%',
    height: 250,
    alignSelf: 'center'
  },
  welcomeTextStyle: {
    fontSize: 24,
    textAlign: 'center'
  },
  learningTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#575757',
    marginTop: 5
  },
  inputContainerStyle: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30
  },
  visibleIconButtonStyle: {
    position: 'absolute',
    right: 30,
    top: 15
  },
  securityIconStyle: {
    position: 'absolute',
    left: 24,
    top: 17.8,
    marginTop: -2
  },
  forgotSectionStyle: {
    marginHorizontal: 16,
    fontSize: 16,
    textAlign: 'right',
    marginTop: -20
  },
  signUpRedirectStyle: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'center',
    marginVertical: 20
  },
  signUpTextStyle: {
    fontSize: 18,
    color: '#2467EC',
    marginLeft: 5
  }
});
