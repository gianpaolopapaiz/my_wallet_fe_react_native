import React, {useState, useCallback, useEffect, useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from "../config";
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import AccountsList from "../components/AccountsList";
import { AuthContext } from "../context/AuthContext";

const Accounts = ({navigation}) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {userInfo, userToken} = useContext(AuthContext);

  const getAccounts = () => {
    setLoading(true);
    axios.get(`${BASE_URL}/api/v1/accounts`,
      { headers: { Authorization: `Bearer ${userToken}`} })
      .then(response => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.log('error ' + error);
      });
    setLoading(false)
  }

  useEffect(() => {
    getAccounts();
  }, [])

  return (
    <ScreenContentWrapper pageTitle='Accounts'>
      {loading && <ActivityIndicator size='large'/>}
      {!loading && accounts.length > 0 ?
        <AccountsList navigation={navigation} accounts={accounts}/>
        :
        <Text>There is no account yet.</Text>
      }
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
});

export default Accounts
