import React, {useContext} from 'react';
import {Button, StyleSheet} from 'react-native';
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const {logout} = useContext(AuthContext)

  return (
    <ScreenContentWrapper pageTitle='Settings'>
      <Button title={'logout'}
              color={'red'}
              onPress={() => {logout()}}>
        Logout
      </Button>
    </ScreenContentWrapper>
  );
};

const styles = StyleSheet.create({
});

export default Settings;