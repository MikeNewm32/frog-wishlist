import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List';
import Frogs from './Frogs';



class Lists extends Component {
    render() {
    const lists = this.props.lists;
    const userId = this.props.userId;

    console.log(lists);

    const listsComponent = lists.map((list, index) => {
        return <List {...list} key={index} userId={userId}/>
    })
        
    return (
        <div>
            <p>{ listsComponent }</p>
        </div>
        );
    }
}

Lists.defaultProps = {
   lists: [],
   userId: ''
}

export default Lists;