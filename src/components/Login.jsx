import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Auth from "../modules/authentication";
const Login = () => {
  const auth = new Auth({ host: "http://localhost:3000/api/v1" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const logInHandler = async () => {
    try {
      let response = await auth.signIn(email, password);
      setMessage(response.data.uid);
    } catch (error) {}
  };
  return (
    <View>
      <Text>{message}</Text>
      <TextInput
        editable
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        style={{ height: 40, borderColor: "pink", borderWidth: 2 }}
      />
      <TextInput
        editable
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={{ height: 40, borderColor: "pink", borderWidth: 2 }}
      />
      <Button title="Login" color="#841584" onPress={() => logInHandler()} />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
