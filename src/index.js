import React from "react";
import ReactDOM from "react-dom";
import{ StateProvider ,useStateProviderValue}from "./StateProvider";
import reducer,{initialState} from "./reducer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);
