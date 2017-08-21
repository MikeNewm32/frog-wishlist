import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";


class NewList extends Component {
    constructor () {
        super();

        this.state = {
            lists: {
                name: ''
            },
            redirect: false
        }
    }

  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;
         const lists = { ...this.state.lists };
         lists[attributeName] = attributeValue;
         this.setState({ lists })
 };

  _handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state;
    const userId = this.props.match.params.userId
    const listId = this.props.match.params.listId
    axios.post(`/api/user/${userId}/lists/`, payload)
        .then((res) => {
      this.setState({"redirect": true});
    })
    .catch(err => console.log(err));
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