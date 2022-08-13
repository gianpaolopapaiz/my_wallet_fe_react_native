import React from "react";
import { Text } from "react-native"
import globalStyles from "../styles";

const WText = ({type = 'p', aStyle, children}) => {
  const defaultStyle = (_type) => {
    switch (_type) {
      case 'p':
        return globalStyles.textP
        break;
      case 'h1':
        return globalStyles.textH1
        break;
      default:
        return globalStyles.textP
        break;
    }
  }
  let formattedStyle = [defaultStyle(type)];
  if (Array.isArray(aStyle)) {
    formattedStyle.concat(aStyle);
  } else {
    formattedStyle.push(aStyle)
  }

  return (
    <Text style={formattedStyle}>{children}</Text>
  )
}

export default WText;