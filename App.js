import React from "react";
import { Text, View } from "react-native";
import Header from './src/components/Header';
import DisplayArticles from './src/components/DisplayArticles';

const App = () => {
  return (
    <View>
      <Header />
      <Text id="header">Welcome</Text>
      <DisplayArticles />
    </View>
  );
};

export default App;