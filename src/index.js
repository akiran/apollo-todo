import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/App";
import { ApolloProvider } from "react-apollo";
import client from './client/data/apollo-client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById("root")
);
