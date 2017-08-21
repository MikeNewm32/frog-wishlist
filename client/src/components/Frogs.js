import React, { Component } from 'react';
import axios from 'axios';
import FrogList from './FrogList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        this._createFrogInfo(this.props.match.params.userId, this.props.match.params.listId);
    }

    _createFrogInfo= (userId, listId) => {
            axios.get(`/api/user/${userId}/lists/${listId}`)
                .then(res => {
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
        return <FrogList 
        {...frog} 
        createFrogInfo={this._createFrogInfo}key={index} 
        userId={this.props.match.params.userId}
        listId={this.props.match.params.listId}
        frogId={this.state.id}
        />
    })

        return (
            <div>
                    <div className="navbar"><Link to={`/user/${userId}`}>Home</Link>
                    <Link to={`/user/${userId}/`}>Back to All Lists</Link>
                    </div>
                    <div>
                   {frogComponents}
                <div>
                <div>
                    <button>
                        <div><Link to={`/user/${userId}/lists/${this.state.id}/frogs/new`}>Add New Frog</Link></div>
                    </button>
                </div>
                </div>
                    </div>
            </div>
        );
    }
}

Frogs.defaultProps = {
   frogs: []
}

export default Frogs;