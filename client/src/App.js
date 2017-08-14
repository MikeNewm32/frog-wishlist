import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from "./components/Users";
// import Frogs from "./components/Frogs";
// import Breeders from "./components/Breeders";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Users</Link>
          </div>
          <div>
            <Route exact path="/" component={Users} />
            {/* <Route path="/frogs/:frogsId" component={Frogs} />
            <Route path="/breeders" component={Breeders} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
