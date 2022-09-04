import React, {useContext, useState} from "react";
import { Button, TextInput } from "react-native";
import { AuthContext } from "../context/AuthContext";
import ScreenContentWrapper from "../components/ScreenContentWrapper";
import WText from "../components/WText";

const LoginScreen = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const {login} = useContext(AuthContext);

  return (
    <ScreenContentWrapper>
      <WText>
        Log In
      </WText>
      <TextInput
        placeholder='email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='password'
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={'login'}
        onPress={() => {login(email, password)}}
      >
        Login
      </Button>
    </ScreenContentWrapper>
  )
};

export default LoginScreen;
