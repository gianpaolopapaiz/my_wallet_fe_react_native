import React, {useState} from 'react'
import {Modal, Button, StyleSheet, View, TextInput, Pressable} from "react-native";
import WText from "./WText";
import globalStyles from "../styles";
import axios from "axios";
import {BASE_URL} from "../config";

const createAccountModal = (props) => {
  const visible = props.visible;
  const setVisible = props.setVisible;
  const getAccounts = props.getAccounts;
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [initialAmount, setInitialAmount] = useState(0)

  const createAccount = (name, description, initialAmount) => {
    axios.post(`${BASE_URL}/api/v1/accounts`, {
      account: {
        name: name,
        description: description,
        initial_amount: initialAmount
      },
    })
    .then( res => {
      setVisible(false);
      getAccounts();
    })
    .catch(e => {
      console.log(`Create Account error ${e}`);
    })
  }

  return(
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <WText type="h3">Add Account</WText>
          <WText>Create a new account for your profile.</WText>
          <TextInput
            style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder='Description'
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='Initial Amount'
            value={initialAmount}
            onChangeText={setInitialAmount}
          />
          <View style={styles.buttonsContainer}>
            <Pressable
              style={globalStyles.btnPrimary}
              onPress={()=>{createAccount(name, description, initialAmount)}}
            >
              <WText aStyle={globalStyles.btnTextPrimary}>CREATE</WText>
            </Pressable>
            <Pressable
              style={globalStyles.btnSecondary}
              onPress={()=>{setVisible(false)}}
            >
              <WText aStyle={globalStyles.btnTextSecondary}>CANCEL</WText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  buttonsContainer: {
    width: '90%',
    marginTop: 10
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  input: {
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 40,
    width: '90%',
    borderRadius: 12,
    marginVertical: 10
  },
  modalContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    paddingVertical: 30,
    justifyContent: "center",
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black'
  }
});

export default createAccountModal;
