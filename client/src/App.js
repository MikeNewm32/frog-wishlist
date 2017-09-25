import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import UserHome from './components/UserHome';
import Lists from './components/Lists';
import Frogs from './components/Frogs';
import NewList from './components/NewList'
import NewFrog from './components/NewFrog';
import EditFrog from './components/EditFrog';
import List from './components/List';
import ListItem from './components/ListItem';
import EditList from './components/EditList';
import Navbar from './components/Navbar';

class App extends Component {
  render(){
    return (
      <div>
      <Router>
        <div>
          <Navbar />
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:userId/" component={UserHome} />
              <Route exact path="/user/:userId/lists" component={Lists} />
              <Route exact path="/user/:userId/lists/new" component={NewList} />
              <Route exact path="/user/:userId/editlist/:listId" component={EditList} />
              <Route exact path="/user/:userId/lists/:listId/" component={ListItem} />
              <Route exact path="/user/:userId/lists/:listId/frogs/new/" component={NewFrog}/>
              <Route exact path="/user/:userId/lists/:listId/frogs/:frogId/edit/" component={EditFrog}/>
            </div>
        </div>
      </Router>
      </div>
    );
  }
}


export default App;
