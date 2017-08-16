import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class User extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                id: '',
                userName: '',
                list: []
            },
            list: {
                id: '',
            },
            viewList: false,
            updateUser: false
        }
    }
    componentWillMount(){
        const id = this.props.userId
        axios.get(`/api/user/${id}`).then((res) => {
            console.log(res.data._id).then((res) => {
                const newState = {...this.state}
                newState.user.id = res.data._id;
                newState.user.userName = res.data.userName;
                newState.user.list = res.data.list;
                this.setState(newState)
            })
        })
    }}

export default User;