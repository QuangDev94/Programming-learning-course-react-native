import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#2467EC',
    width: responsiveWidth(88),
    height: responsiveHeight(5.5),
    borderRadius: 5,
    justifyContent: 'center',
    margin: 'auto'
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center'
  },
  dotStyle: {
    backgroundColor: '#C6C7CC',
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5
  },
  activeDotStyle: {
    backgroundColor: '#2467EC',
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: hp('3.5%')
  },
  descriptionStyle: {
    color: '#575757',
    textAlign: 'center',
    fontSize: hp('2.5%')
  },
  inputStyle: {
    backgroundColor: 'white',
    color: '#A1A1A1',
    fontSize: 16,
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: '#2467EC'
  },
  errorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 26,
    position: 'absolute',
    top: 60
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 11,
    marginTop: -1
  }
});
