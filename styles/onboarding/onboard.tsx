import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  firstContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    width: wp('23%'),
    height: hp('10%')
  },
  titleWrapper: {
    flexDirection: 'row'
  },
  titleTextShape1: {
    position: 'absolute',
    left: -28,
    top: -20
  },
  titleText: {
    fontSize: hp('4%'),
    textAlign: 'center'
  },
  titleTextShape2: {
    position: 'absolute',
    right: -40,
    top: -20
  },
  titleTextShape3: {
    position: 'absolute',
    left: 60
  },
  dscpWrapper: {
    marginTop: 30
  },
  dscpText: {
    color: '#575757',
    textAlign: 'center',
    fontSize: hp('2%')
  },
  buttonWrapper: {
    width: wp('92%'),
    borderRadius: 4,
    paddingVertical: 18,
    marginTop: 40,
    backgroundColor: '#2467EC'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
