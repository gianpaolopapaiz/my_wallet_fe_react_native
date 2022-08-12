import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import view from "react-native-web/dist/exports/View";

const PageTitle = (props) => {
  const text = props.text
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: 'Roboto'
  }
})

export default PageTitle

