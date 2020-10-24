import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayArticles from "./src/components/DisplayArticles";
import Login from "./src/components/Login";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="El Gaucho" component={Login} />
        <Stack.Screen name="first page" component={DisplayArticles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
