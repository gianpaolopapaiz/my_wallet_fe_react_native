import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import AccountsList from "../components/AccountsList";

const Accounts = ({navigation}) => {
  const [accounts, setAccounts] = useState([])

  const handleFetchAccounts = useCallback(async () => {
    const result = await fetch('https://wallets-rails-api.herokuapp.com/api/v1/accounts');
    const accountsJson = await result.json();
    console.log(result)
    if (result.ok) {
      setAccounts(accountsJson);
    }
  });

  // const fetchAccounts = useCallback(async () => {
  //   const result = await fetch('https://wallets-rails-api.herokuapp.com/api/v1/accounts');
  //   const accountsJson = await result.json();
  //   console.log(result)
  //   if (result.ok) {
  //     setAccounts(accountsJson);
  //   }
  // });

  const getAccounts = () => {
    return fetch('https://wallets-rails-api.herokuapp.com/api/v1/accounts')
      .then((response) => {
        console.log(response)
        response.json()
        if (response.status === 200) {
          console.log('foi')
        } else {
          console.log('erro')
        }
      })
  };

  useEffect(() => {
    console.log('fetching accounts')
    // handleFetchAccounts();
    // getAccounts()
  }, [])

  // const fakeAccounts = [
  //   {
  //     id: 1,
  //     name: 'Account 1',
  //     description: 'Account 1 description',
  //     initial_amount: 100,
  //     nice_initial_amount: '$100,00',
  //     current_value: 500,
  //     nice_current_amount: '$500,00'
  //   },
  //   {
  //     id: 2,
  //     name: 'Account 2',
  //     description: 'Account 2 description',
  //     initial_amount: 50,
  //     nice_initial_amount: '$50,00',
  //     current_amount: 400,
  //     nice_current_amount: '$400,00'
  //   }
  // ]
  if (accounts.length > 0) {
    return (
      <ScreenContentWrapper pageTitle='Accounts'>
        <AccountsList navigation={navigation} accounts={accounts}/>
      </ScreenContentWrapper>
    )
  } else {
    return (
      <ScreenContentWrapper pageTitle='Accounts'>
        <Text>There is no account yet.</Text>
      </ScreenContentWrapper>
    )
  }
}

const styles = StyleSheet.create({
});

export default Accounts
