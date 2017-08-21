import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

class NewFrog extends Component {
    constructor() {
        super();
        this.state = {
                frogs: {
                    morph: '',
                    scientificName: '',
                    description: '',
                    // picture: '',
                    care: 0
                },
                redirect: false
            }
    }

  _handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;
         const frogs = { ...this.state.frogs };
         frogs[attributeName] = attributeValue;
         this.setState({ frogs })
 };

  _handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state;
    const userId = this.props.match.params.userId
    const listId = this.props.match.params.listId
    axios.post(`/api/user/${userId}/lists/${listId}/frogs/`, payload)
        .then((res) => {
      this.setState({"redirect": true});
    })
    .catch(err => console.log(err));
  };


    render() {
        const userId = this.props.match.params.userId
        const listId = this.props.match.params.listId
        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}/lists/${listId}/frogs`}/>
        } else {
        return (
            <div>
            <div className="navbar">
                <Link to={`/user/${userId}`}>Home</Link>
                <Link to={`/user/${userId}/lists/${listId}/frogs`}>Back to List</Link>
            <form onSubmit={this._handleSubmit}>
            <input type="text"  onChange={this._handleChange}
                value={this.state.newFrog.morph} name="morph" placeholder="Frog morph" required/>
            <input type="text" onChange={this._handleChange}
                value={this.state.newFrog.scientificName} name="scientificName" placeholder="Scientific Name" required/>
            <input type="text" onChange={this._handleChange}
                value={this.state.newFrog.description} name="description" placeholder="Description" required/>
            {/* <input type="text" onChange={this._handleChange}
                value={this.state.newFrog.image} name="image" placeholder="URL to Frog Image" required/> */}
            <input type="number" onChange={this._handleChange}
                value={this.state.newFrog.care} name="care" placeholder="Ease of care rating" required/>
        <button>Add Frog</button>
        </form>
            </div>
            </div>
        );
        }
    }
}

NewFrog.defaultProps = {
   match: {
       params: {
           userId: '',
           listId: ''
       }
   },
     location: {
         state: {
            frog: {
                _id: ''
    }
         }
     }
}

export default NewFrog;