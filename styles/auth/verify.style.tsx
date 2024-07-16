import { StyleSheet } from 'react-native';

export const verifyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  headerTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTextStyle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20
  },
  inputStyle: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20
  }
});
