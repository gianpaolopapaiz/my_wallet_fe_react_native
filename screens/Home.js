import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import PageTitle from "../components/PageTitle";
import AccountsList from "../components/AccountsList";
// import AccountsList from "../components/AccountsList";

const Home = () => {
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
      <AccountsList accounts={accounts}/>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
});

export default Home
