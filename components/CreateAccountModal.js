import React from 'react'
import {Modal, Button, StyleSheet, View, TextInput, Pressable} from "react-native";
import WText from "./WText";
import constants from "./constants";
import globalStyles from "../styles";

const createAccountModal = (props) => {
  const visible = props.visible;
  const setVisible = props.setVisible;

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
          />
          <TextInput
            style={styles.input}
            placeholder='Description'
            multiline={true}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='Initial Amount'
          />
          <View style={styles.buttonsContainer}>
            <Pressable
              style={globalStyles.btnPrimary}
              onPress={()=>{}}
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
    shadowColor: '#52006A'
  }
});

export default createAccountModal;
