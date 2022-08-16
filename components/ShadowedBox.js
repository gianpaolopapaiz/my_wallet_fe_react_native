import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import globalStyles from "../styles";

const ShadowedBox = ({route, children}) => {
  return (
    <TouchableOpacity onPress={route} style={[
      globalStyles.boxShadow,
      globalStyles.cardWrapper
    ]}>
      {children}
    </TouchableOpacity>
  )
}

export default ShadowedBox;
