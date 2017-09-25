import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class EditList extends Component {
    constructor() {
        super();
        this.state = {
            list: {
                name: ''
            },
            redirect: false
        }
    }
    componentWillMount() {
        const userId = this.props.match.params.userId;
        const listId = this.props.match.params.listId;
        this._fetchList(listId, userId);
    }

    _fetchList = (listId, userId) => {
        axios.get(`/api/user/${userId}/lists/${listId}`)
        .then(res => {
            const list = res.data.list;
            this.setState({list});
        })
    }

    _handleChange = (e) => {
        const newState = {...this.state.list}
        newState[e.target.name] = e.target.value
        this.setState({ list: newState })
    };
    
    _handleSubmit = (e) => {
        e.preventDefault();
        const list = {...this.state.list};
        const payload = list;
        payload.name = list.name;
        const userId = this.props.match.params.userId
        const listId = this.props.match.params.listId
        axios.put(`/api/user/${userId}/lists/${listId}`, list)
            .then((res) => {
                console.log("list updated");
                this.setState({redirect: true});
            })
    };

    _iWannaGoHome = () => {
        this.setState({redirect: true});
    }

    render() {
        const userId = this.props.match.params.userId
        const listId = this.props.match.params.listId
        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}/lists/${listId}`}/>
        } else {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <div><input name="name" type="text" placeholder="Edit name of list" value={this.state.list.name} onChange={this._handleChange}/></div>
                    <input type="submit" value="Update List"/>
                </form>  
                <button onClick={this._iWannaGoHome}>Go Back</button>
            </div>
        );
    }
    }
}

export default EditList;