import React from "react";
import { Text, View } from "react-native";
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <Header />
      <Text id="header">Welcome</Text>
    </View>
  );
};

export default App;
