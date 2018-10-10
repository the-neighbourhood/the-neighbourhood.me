import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IntorPage from './Intro';
import Members from './Members';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={IntorPage} />
          <Route exact path="/members" component={Members} />
        </div>
      </Router>
    );
  }
}

export default App;
