import React, {useState, useCallback, useEffect, useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from "../config";
import {ActivityIndicator, Button, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import AccountsList from "../components/AccountsList";
import { AuthContext } from "../context/AuthContext";
import CreateAccountModal from "../components/CreateAccountModal";
import constants from "../components/constants";
import WText from "../components/WText";

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
        getAccounts={getAccounts}
      />
      {loading && <ActivityIndicator size='large'/>}
      {!loading && accounts.length > 0 ?
        <AccountsList navigation={navigation} accounts={accounts}/>
        :
        <Text>There is no account yet.</Text>
      }
      <Pressable
        style={styles.roundPlusButton}
        onPress={() => setCreateAccountModalVisible(true)}
      >
        <WText
          type='h3'
          aStyle={styles.colorPrimary}>+</WText>
      </Pressable>
    </ScreenContentWrapper>
  )
}

const styles = StyleSheet.create({
  roundPlusButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: constants.primaryColor,
    alignItems: 'center',
    justifyContent: "center",
    elevation: 10,
    shadowColor: 'black'
  },
  colorPrimary: {
    color: constants.bgColor
  }
});

export default Accounts
