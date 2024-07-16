import { StyleSheet } from 'react-native';

export const forgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  headerTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  buttonStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#3876EE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  },
  loginLinkStyle: {
    flexDirection: 'row',
    marginTop: 30
  },
  loginTextStyle: {
    color: '#3876EE',
    marginLeft: 5,
    fontSize: 16
  }
});
