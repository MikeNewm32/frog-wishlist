import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";


class NewList extends Component {
    constructor () {
        super();

        this.state = {
            list: {
                name: ''
            },
            redirect: false
        }
    }

  _handleChange = (e) => {
    const newState = {...this.state.list}
    newState[e.target.name] = e.target.value
    this.setState({ list: newState })
 };

  _handleSubmit = (e) => {
    e.preventDefault();
    const newList = {...this.state.list};
    const payload = newList;
    payload.name = newList.name;
    const userId = this.props.match.params.userId
    axios.post(`/api/user/${userId}/lists`, newList)
        .then((res) => {
            console.log("list created");
      this.setState({redirect: true});
    })
  };


    render() {
        const userId = this.props.match.params.userId
        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}/`}/>
        } else {
        return (
            <div>
                <div className="navbar">
                    <Link to={`/user/${userId}`}>Home</Link>
                    <Link to={`/user/${userId}/`}>Back to Lists</Link>
                </div>
            <div className="newlist">
            <div>
            Whats your new list?
              <form onSubmit={this._handleSubmit}>
                <div><input name="name" type="text" placeholder="Name of list" onChange={this._handleChange}/></div>
                <input type="submit" value="Add New List"/>
            </form>  
            </div>               
            </div>
            </div>
        );
        }
    }
}
NewList.defaultprops = {
    list: {
       name: ''
    }
}

export default NewList;