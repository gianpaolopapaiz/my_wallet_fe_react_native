import { StyleSheet } from 'react-native';
import constants from "./components/constants";

const globalStyles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    backgroundColor: 'white'
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
  }
});

export default globalStyles;
