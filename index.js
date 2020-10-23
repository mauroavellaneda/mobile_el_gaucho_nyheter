import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://api-el-gaucho-nyheter.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;


const ConnectedApp = () => {
  return <App />;
};

registerRootComponent(ConnectedApp);