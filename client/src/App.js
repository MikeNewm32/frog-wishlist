import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User"
import Frog from "./components/Frog";
import Breeder from "./components/Breeder";



class App extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      wishlist: []
    }

  }

  render() {

    const UserComponent = () => (
      <User userId={this.state.user.id} collections={this.state.user.collections} handleAddRecord={this._handleAddRecord}/>
    )

    return (
      <Router>

          <div>
            <Route exact path ="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/frog" component={Frog} />
            <Route path="/breeder" component={Breeder} />
          </div>

      </Router>
    );
  }
}

export default App;
