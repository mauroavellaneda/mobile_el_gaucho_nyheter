import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://api-el-gaucho-nyheter.herokuapp.com/api/v1";

const ConnectedApp = () => {
  return <App />;
};

registerRootComponent(ConnectedApp);
