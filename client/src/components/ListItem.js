import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListItem extends Component {
    constructor(){
        super();
        this.state = {
            list: {},
            frogs: []
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
    // _fetchFrogs = (listId, userId) => {
    //     axios.get(`/api/user/${userId}/lists/${listId}/frogs`)
    //     .then(res => {
    //         const frogs = res.data.frogs;
    //         this.setState({frogs})
    //     })
    // }
    render() {
        const list = this.state.list;
        const frogs = this.state.frogs;
        console.log(frogs)
        return (
            <div>
                <h2>{list.name}</h2>
                {frogs.map((frog) => {
                    return <div>
                    <h3>{frog.morph}</h3>
                    <h4>{frog.scientificName}</h4>
                    <h4>{frog.description}</h4>
                    </div>
                })}

            </div>
        );
    }
}

export default ListItem;