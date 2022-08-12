import React from 'react'
import { View, StyleSheet } from "react-native";
import PageTitle from "./PageTitle";

const ScreenContentWrapper = ({pageTitle, children}) => {
  return (
    <View style={styles.safeArea}>
      <PageTitle text={pageTitle}/>
      <View style={styles.mainContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: 'green'
  },
  mainContainer: {
    backgroundColor: 'beige',
    flex: 1,
  }
});

export default ScreenContentWrapper;