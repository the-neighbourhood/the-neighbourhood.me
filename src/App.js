import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import IntorPage from './Intro';
import Members from './Members';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={IntorPage} />
          <Route exact path="/members" component={Members} />
        </div>
      </Router>
    );
  }
}

export default App;
