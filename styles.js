import { StyleSheet } from 'react-native';
import constants from "./components/constants";

const globalStyles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
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
  textP: {
    fontFamily: constants.fontFamily,
    fontSize: constants.textPSize,
  }
});

export default globalStyles;
