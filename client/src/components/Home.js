import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import User from './User';
import Frog from './Frog';


class Home extends Component {

    render() {
      return (
          <div>
            <h1>Frogs for You!</h1>
            <div>New users enter <input type="text" name="user" placeholder="username"/> here!</div>             
            <div><Link to="./User">Users</Link></div>
            <div><Link to="./Frog">Frogs</Link></div>
          </div>
      );
    }
  }

  export default Home;