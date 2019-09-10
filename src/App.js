import React from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage, SearchPage, ViewPage, AdminPage } from "./Pages";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./Graphql/apolloClient";
import { YoutubeProvider } from "./Contexts/YoutubeContext";
import { AdminProvider } from "./Contexts/AdminContext";
const App = () => {
  return (
    <AdminProvider>
      <YoutubeProvider>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <GlobalStyles />
            <Router>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/view" component={ViewPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/admin" component={AdminPage} />
              </Switch>
            </Router>
          </ApolloHooksProvider>
        </ApolloProvider>
      </YoutubeProvider>
    </AdminProvider>
  );
};

export default App;
