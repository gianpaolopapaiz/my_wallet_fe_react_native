import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavBar from '../components/NavBar';
import TransactionsList from "../components/TransactionsList";

const Home = () => {
  const transactions = [
    {
      title: '01/01/2022',
      data: [
        {
          id: 1,
          title: 'Fuel for car',
          value: -50,
          formattedValue: '-$50.00',
          category: 'Vehicles'
        },
        {
          id: 2,
          title: 'Monthly Salary',
          value: 2000,
          formattedValue: '$2.000.00',
          category: 'Income'
        }
      ]
    },
    {
      title: '02/01/2022',
      data: [
        {
          id: 3,
          title: 'Medicine',
          value: -30,
          formattedValue: '-$30.00',
          category: 'Vehicles'
        }
      ]
    }
  ]

  return (
    <View style={styles.safeContainer}>
      <NavBar/>
      <View style={styles.mainContainer}>
        <View>
          <TransactionsList transactions={transactions}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flexGrow: 1
  },
  mainContainer: {
    backgroundColor: 'beige',
    flex: 1
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

export default Home
