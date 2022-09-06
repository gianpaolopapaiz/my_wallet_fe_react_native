import React, {useState, useCallback, useEffect, useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from "../config";
import {ActivityIndicator, Button, Modal, StyleSheet, Text, View} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import AccountsList from "../components/AccountsList";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles";
import CreateAccountModal from "../components/CreateAccountModal";

const Accounts = ({navigation}) => {
  const [accounts, setAccounts] = useState([])
  const [createAccountModalVisible, setCreateAccountModalVisible] = useState(false);
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
      <CreateAccountModal
        visible={createAccountModalVisible}
        setVisible={setCreateAccountModalVisible}
      />
      {loading && <ActivityIndicator size='large'/>}
      {!loading && accounts.length > 0 ?
        <AccountsList navigation={navigation} accounts={accounts}/>
        :
        <Text>There is no account yet.</Text>
      }
      <Button
        title='createAccountModalOpen'
        onPress={() => setCreateAccountModalVisible(true)}
      >
        Create Account
      </Button>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
});

export default Accounts
