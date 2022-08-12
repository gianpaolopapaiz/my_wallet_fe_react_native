import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import PageTitle from "../components/PageTitle";
import TransactionsList from "../components/TransactionsList";

const Transactions = () => {
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
    <ScreenContentWrapper>
      <PageTitle text="Accounts"/>
      <View style={styles.mainContainer}>
        <View>
          <TransactionsList transactions={transactions}/>
        </View>
      </View>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: 'beige'
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

export default Transactions
