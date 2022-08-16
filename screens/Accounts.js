import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import AccountsList from "../components/AccountsList";

const Accounts = ({navigation}) => {
  const accounts = [
    {
      id: 1,
      name: 'Account 1',
      description: 'Account 1 description',
      initial_amount: 100,
      nice_initial_amount: '$100,00',
      current_value: 500,
      nice_current_amount: '$500,00'
    },
    {
      id: 2,
      name: 'Account 2',
      description: 'Account 2 description',
      initial_amount: 50,
      nice_initial_amount: '$50,00',
      current_amount: 400,
      nice_current_amount: '$400,00'
    }
  ]

  return (
    <ScreenContentWrapper pageTitle='Accounts'>
      <AccountsList navigation={navigation} accounts={accounts}/>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
});

export default Accounts
