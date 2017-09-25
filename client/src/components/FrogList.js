import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';
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
                console.log("successfully deleted")
                })
    }

    render() {
        const userId = this.props.userId;
        const listId = this.props.listId;
        const frogId = this.props._id;

        console.log(this.props);

    return (
        <div>
            
                {this.state.frogs.map((frog) => {
                    return 
                    <div className="frog-card">
                        <h3>
                                <div>Morph: {frog.morph}</div>
                                <div>Scientific Name: {frog.scientificName}</div>
                                <div>Description: {frog.description}</div>
                                <div>Picture: <img src={frog.picture} /></div>
                                <div>Care Rating: {frog.care}</div>
                            </h3>
                            <div><button><Link to={`/user/${userId}/lists/${listId}/frogs/${frog._id}/edit`}
                            frog={this.props}>Edit Frog</Link></button></div>
                            <div><button onClick={this._deleteFrog}>Delete</button></div>
                            </div>
                })}
            
        </div>
    );
};
}

FrogList.defaultProps = {
   match: {
       params: {
           userId: '',
           listId: ''
       }
   },
    frogs: []
}


export default withRouter(FrogList);