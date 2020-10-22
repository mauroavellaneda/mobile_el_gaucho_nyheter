import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";

const ConnectedApp = () => {
  return <App />;
};

registerRootComponent(ConnectedApp);
