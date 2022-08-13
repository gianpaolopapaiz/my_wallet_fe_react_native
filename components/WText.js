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
      case 'h2':
        return globalStyles.textH2
        break;
      case 'h3':
        return globalStyles.textH3
        break;
      case 'h4':
        return globalStyles.textH4
        break;
      case 'h5':
        return globalStyles.textH5
        break;
      case 'h6':
        return globalStyles.textH6
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