import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import NewFrog from './NewFrog';

class FrogList extends Component {
    constructor() {
        super();
        this.state= {
            frogs: []
        }
    }

    componentWillMount() {
        const userId = this.props.userId;
        const listId = this.props.listId;
        axios.get(`/api/user/${userId}/lists/${listId}/frogs`)
        .then((res) => {
            console.log(res.data);
        })
    }

     _deleteFrog = () => {
        const userId = this.props.userId;
        const listId = this.props.listId;
        const frogId = this.props._id;
        axios.delete(`/api/user/${userId}/lists/${listId}/frogs/${frogId}/delete`)
            .then(res => {
                this.props.createFrogData(userId, listId)
                })
    }

    render() {
        const userId = this.props.userId;
        const listId = this.props.listId;
        const frogId = this.props._id;

        console.log(this.props);

    return (
        <div>
            <h3>
            <div>{this.props.description}</div>
            <div>{this.props.price}</div>
            <div>{this.props.date}</div>
            </h3>
            <Link to={`/user/${userId}/lists/${listId}/frogs/${frogId}/edit`}
            frog={this.props}
            >Edit Item</Link>
            <button onClick={this._deleteFrog}>delete</button>
        </div>
    );
};
}

FrogList.defaultProps = {
   match: {
       params: {
           userId: '',
           listId: '',
       }
   },
    frogs: []
}


export default withRouter(FrogList);