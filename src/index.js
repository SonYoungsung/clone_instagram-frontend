import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Client from "./Apollo/Client";
import { ApolloProvider } from "react-apollo-hooks";

ReactDOM.render(
  <ApolloProvider Client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
