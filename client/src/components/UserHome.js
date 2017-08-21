import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lists from './Lists';
import NewList from './NewList';
import { UserStyle } from '../styles/UserStyle';


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
    axios.get(`/api/user/${id}`)
    .then(res => {
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
      <UserStyle>
        <div>
            <h1>Hello {this.state.user.userName}!</h1>
            <h3>Here are your lists!</h3>
            <div><Lists lists={this.state.user.lists} userId={this.state.id}/></div>
           <div>Add a <Link to={`/user/${this.state.id}/lists/new`}>New List</Link></div>
        </div>
        </UserStyle>
    );
  }
}

export default UserHome;