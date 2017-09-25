import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class List extends Component {
    render() {
        const userId = this.props.userId;
        return (
            <div className="list-card">
                <p><Link to={`/user/${userId}/lists/${this.props._id}/`}>{this.props.name}</Link></p>
            </div>
        );
    }
}

List.defaultProps = {
   name: [],
   userId: ''
}
export default List;