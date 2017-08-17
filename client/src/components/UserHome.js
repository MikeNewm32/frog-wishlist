import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lists from './Lists';

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      user: {
        lists: [],
      }
    }
  }

  componentWillMount() {
    const id = this.props.match.params.userId
    axios.get(`/api/user/${id}`).then(res => {
    this.setState({
      id: res.data._id,
      user: res.data
    });
    console.log(this.state.user.lists);
    console.log(this.state.id);
    })
  }

  render() { 
    return (
      <div>
          <h1>Hello {this.state.user.userName}</h1>
          <h2>Lists: </h2>
          <h3>Ready to add a new list?</h3>
          <Link to={`/user/${this.state.id}/lists/new`}>Add a New list</Link>  
      </div>
    );
  }
}

export default UserHome;