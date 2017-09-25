import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class ListItem extends Component {
    constructor(){
        super();
        this.state = {
            list: {},
            frogs: [],
            redirect: false
        }
    }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const listId = this.props.match.params.listId;
        this._fetchList(listId, userId)
        // this._fetchFrogs(listId, userId)
    }
    _fetchList = (listId, userId) => {
        axios.get(`/api/user/${userId}/lists`)
        .then(res => {
            const lists = res.data;
            lists.map(list => {
                if (list._id === listId) {
                    this.setState({
                        list: list,
                        frogs: list.frogs
                    })
                }
            })
        })
    }
    _deleteList = () => {
        const userId = this.props.match.params.userId;
        console.log("userId is: " + userId)
        const listId = this.props.match.params.listId;
        console.log("listId is: " + listId)
        axios.delete(`/api/user/${userId}/lists/${listId}/delete`)
            .then(res => {
                console.log("successfully deleted")
                    this.setState({redirect: true})
                })
            .catch(err => {
                console.log(err)
            })

    }
    // _fetchFrogs = (listId, userId) => {
    //     axios.get(`/api/user/${userId}/lists/${listId}/frogs`)
    //     .then(res => {
    //         const frogs = res.data.frogs;
    //         this.setState({frogs})
    //     })
    // }
    render() {
        const userId = this.props.match.params.userId;
        const listId = this.props.match.params.listId;
        const list = this.state.list;
        const frogs = this.state.frogs;
        console.log(frogs)
        if (this.state.redirect) {
            return <Redirect to={`/user/${userId}`}/>
        } else {
            return (
                <div>
                    <h2>{list.name}</h2>
                <div className="list-container">
                    {frogs.map((frog) => {
                        return <div key={frog._id} className="frog-card">
                        <h3>{frog.morph}</h3>
                        <h4>{frog.scientificName}</h4>
                        <h4>{frog.description}</h4>
                        </div>
                    })}
                </div>
                    <Link to={`/user/${userId}/editlist/${listId}`} ><button> Edit List </button></Link>
                    <br />
                    <button onClick={this._deleteList}>Delete List</button>
                </div>
                
            );
        }
    }
}

export default ListItem;