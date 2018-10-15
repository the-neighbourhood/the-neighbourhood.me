import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import IntorPage from './intro';
import Members from './members';
import Nav from './nav';
import Footer from './footer'

import client from './client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={IntorPage} />
            <Route exact path="/members" component={Members} />
            <Footer/>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
