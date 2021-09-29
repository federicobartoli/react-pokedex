import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Context
import AllPokemonContextProvider from "./context/AllPokemonContext";
import LoadMoreContextProvider from "./context/LoadMoreContext";

ReactDOM.render(
  <React.StrictMode>
    <AllPokemonContextProvider>
      <LoadMoreContextProvider>
        <App />
      </LoadMoreContextProvider>
    </AllPokemonContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
