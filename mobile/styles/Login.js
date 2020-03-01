import {StyleSheet} from 'react-native'

let primaryColor = 'black'

export default StyleSheet.create({
  
  statusbar: {
    backgroundColor: primaryColor,
  },

  logo: {
    width: 250,
    height: 250,
  },

  titleLogo: {
    fontSize: 48
  },

  errorAuth: {
      color: 'red',
      marginBottom: 10,
  },

  button: {
      color: primaryColor,
  },

  line: {
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 10,
  },
});