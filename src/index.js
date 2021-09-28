import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Context
import AllPokemonContextProvider from "./context/AllPokemonContext";

ReactDOM.render(
  <React.StrictMode>
    <AllPokemonContextProvider>
      <App />
    </AllPokemonContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
