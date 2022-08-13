import React from 'react';
import { View, StyleSheet } from "react-native";
import WText from "./WText";
import constants from "./constants";

const PageTitle = (props) => {
  const text = props.text
  return (
    <View style={styles.container}>
      <WText
        type='h1'
        aStyle={styles.pageTitle}>
        {text}
      </WText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10
  },
  pageTitle: {
    color: constants.bgColor,
  }
})

export default PageTitle

