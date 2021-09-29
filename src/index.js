import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BrowserRouter from "react-router-dom/BrowserRouter";

//Context
import AllPokemonContextProvider from "./context/AllPokemonContext";
import LoadMoreContextProvider from "./context/LoadMoreContext";

ReactDOM.render(
  <React.StrictMode>
    <AllPokemonContextProvider>
      <LoadMoreContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </LoadMoreContextProvider>
    </AllPokemonContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
