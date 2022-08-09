import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavBar/>
      <View style={styles.container}>
        <Text style={[styles.titleText]}>First App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'beige',
    paddingVertical: 30,
    flexGrow: 1
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Roboto'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
