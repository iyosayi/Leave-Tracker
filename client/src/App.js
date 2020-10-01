import React, { Component } from "react";
import Login from "./components/Login/Login";
import addLeave from "./components/Leave/Leave";
import getLeave from "./components/Leave/GetLeave/GetLeave";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Allotleave from "./components/Leave/AllotLeave/Allotleave";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/addleave" component={addLeave} />
          <Route exact path="/getleave" component={getLeave} />
          <Route exact path="/allotleave" component={Allotleave} />
        </div>
      </Router>
    );
  }
}

export default App;
