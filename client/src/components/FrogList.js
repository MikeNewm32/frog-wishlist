import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import NewFrogForm from './NewFrogForm';

class FrogList extends Component {
    constructor() {
        super();
        this.state= {
            frogs: []
        }
    }

    componentWillMount() {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        axios.get(`/api/user/${userId}/trips/${tripId}/activities`)
        .then((res) => {
            console.log(res.data);
        })
    }

     _deleteFrog = () => {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        const activityId = this.props._id;
        axios.delete(`/api/user/${userId}/trips/${tripId}/activities/${activityId}/delete`)
            .then(res => {
                this.props.createActivityData(userId, tripId)
                })
    }

    render() {
        const userId = this.props.userId;
        const tripId = this.props.tripId;
        const activityId = this.props._id;

        console.log(this.props);

    return (
        <div>
            <h3>
            <div>{this.props.description}</div>
            <div>{this.props.price}</div>
            <div>{this.props.date}</div>
            </h3>
            <Link to={`/user/${userId}/trips/${tripId}/activities/${activityId}/edit`}
            activity={this.props}
            >Edit Item</Link>
            <button onClick={this._deleteActivity}>delete</button>
        </div>
    );
};
}

ActivityList.defaultProps = {
   match: {
       params: {
           userId: '',
           tripId: '',
       }
   },
    activities: []
}


export default withRouter(ActivityList);