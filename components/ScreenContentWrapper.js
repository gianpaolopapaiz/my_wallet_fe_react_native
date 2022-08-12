import React from 'react'
import { View, StyleSheet } from "react-native";

const ScreenContentWrapper = ({children}) => {
  return (
    <View style={styles.safeArea}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: 'beige'
  }
});

export default ScreenContentWrapper;