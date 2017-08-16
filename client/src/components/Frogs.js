import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import FrogList from './FrogList';



class Frogs extends Component {
    
constructor() {
    super();
    this.state = {
        lists: {
            frogs: []
        }
    }
}

componentWillMount() {
    this._createFrogData(this.props.match.params.userId, this.props.match.params.listId);
}

_createFrogData = (userId, listId) => {
    axios.get(`/api/user/${userId}/lists/${listId}`).then(res => {
        this.setState({
            id: res.data._id,
            lists: res.data,
        });
        console.log(this.state.lists.frogs);
        console.log(res.data.frogs);
    })
}

render() {
    const userId = this.props.match.params.userId;
    const frogs = this.state.lists.frogs;
    const frogComponents = frogs.map((frog, index) => {
        return <FrogList {...frog} createFrogData={this._createFrogData}
        key={index} userId={this.props.match.params.userId} listId={this.props.match.params.listId}
        frogId={this.state.id} />
    })
    return (
        <div>
            {frogComponents}
            <div><Link to={`/user/${userId}/lists/${this.state.id}/frogs/new`}>Add new frog</Link></div>
        </div>
    )
  }
}
Frogs.defaultProps = {
    frogs: []
}

export default Frogs;