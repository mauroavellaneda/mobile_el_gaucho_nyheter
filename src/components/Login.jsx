import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
} from "react-native";
import Auth from "../modules/authentication";

const Login = (props) => {
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
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }}
      />
      <Text style={styles.firstText}>Welcome to El Gaucho News</Text>
      <Text style={styles.secondText}>Please sign in to enter </Text>

      <TextInput
        editable
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        style={styles.texiInput}
      />
      <TextInput
        editable
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.texiInput}
      />

      <Button
        title="Login"
        onPress={() =>
          props.navigation.navigate("first page", {
            customParameter: { message }.toString(),
          })
        }
        style={styles.button}
      />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001a33",
    alignItems: "center",
    justifyContent: "center",
  },
  texiInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    margin: 4,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#1A263E",
    color: "white",
  },
  button: {
    color: "#003366",
    paddingTop: 101,
  },
  firstText: {
    marginBottom: 100,
    fontSize: 25,
    color: "white",
    fontFamily: "serif",
  },
  secondText: {
    color: "white",
    marginBottom: 20,
    fontSize: 17,
  },
  logo: {
    marginBottom: 20,
    height: 100,
    width: Dimensions.get("window").width,
  },
});
