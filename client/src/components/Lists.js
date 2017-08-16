import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class List extends Component {
    render() {
        const userId = this.props.userId;
        return (
            <div>
                <p><Link to={`/user/${userId}/lists/${this.props._id}/frogs`}>{this.props.place}</Link></p>
            </div>
        );
    }
}

List.defaultProps = {
   frog: [],
   userId: ''
}
export default List;