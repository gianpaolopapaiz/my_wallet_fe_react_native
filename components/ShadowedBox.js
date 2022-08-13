import React from 'react';
import { View } from 'react-native';
import globalStyles from "../styles";

const ShadowedBox = ({children}) => {
  return (
    <View style={[
      globalStyles.boxShadow,
      globalStyles.cardWrapper
    ]}>
      {children}
    </View>
  )
}

export default ShadowedBox;
