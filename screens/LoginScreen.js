import React, { useContext } from "react";
import { Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import WText from "../components/WText";

const LoginScreen = () => {
  const {login} = useContext(AuthContext);

  return (
    <ScreenContentWrapper>
      <WText>
        This is the Login Screen
      </WText>
      <Button title={'login'}
              onPress={() => {login('gipppppa@hotmail.com', 'P@ssw0rd')}}
      >
        Login
      </Button>
    </ScreenContentWrapper>
  )
};

export default LoginScreen;
