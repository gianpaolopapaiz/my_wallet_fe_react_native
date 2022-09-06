import { StyleSheet } from 'react-native';
import constants from "./components/constants";

const globalStyles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  boxShadow: {
    elevation: 10,
    shadowColor: '#52006A',
  },
  textH1: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH1Size,
  },
  textH2: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH2Size
  },
  textH3: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH3Size
  },
  textH4: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH4Size
  },
  textH5: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH5Size
  },
  textH6: {
    fontFamily: constants.fontFamily,
    fontWeight: "bold",
    fontSize: constants.textH6Size
  },
  textP: {
    fontFamily: constants.fontFamily,
    fontSize: constants.textPSize,
  },
  btnPrimary: {
    backgroundColor: constants.primaryColor,
    borderRadius: 12,
    marginVertical: 5,
    paddingVertical: 10
  },
  btnSecondary: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: constants.primaryColor,
    borderRadius: 12,
    marginVertical: 5,
    paddingVertical: 8
  },
  btnTextSecondary: {
    color: constants.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnTextPrimary: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default globalStyles;
