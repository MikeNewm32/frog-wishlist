import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";



class EditFrog extends Component {
  constructor() {
    super();
    this.state = {
      frogs: {
        morph: '',
        scientificName: '',
        description: '',
        // picture: '',
        care: ''
      },
      redirect: false
    }
  }

componentWillMount() {
  const userId = this.props.match.params.userId
  const listId = this.props.match.params.listId
  const frogId = this.props.match.params.frogId;
  axios.get(`/api/user/${userId}/lists/${listId}/frogs/${frogId}`)
  .then((res) => {
    this.setState({
      _id: res.data._id,
      morph: res.data.morph,
      scientificName: res.data.scientificName,
      description: res.data.description,
      // image: res.data.image,
      care: res.data.care
    })
  }).catch((err) => {
    console.log(err)
  })
}

_handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;
         const frogs = { ...this.state.frogs };
         frogs[attributeName] = attributeValue;
         this.setState({ frogs })
 };

 _handleSubmit = (e) => {
   e.preventDefault()
   const payload = this.state.frogs;
   const userId = this.props.match.params.userId;
   const listId = this.props.match.params.listId;
   const frogId = this.props.match.params.frogId;
   axios.put(`/api/user/${userId}/lists/${listId}/frogs/${frogId}`, payload).then((res) => {
     this.setState({"redirect": true});
   }).catch(err => console.log(err));
};


render () {
  const userId = this.props.match.params.userId
  const listId = this.props.match.params.listId

  if (this.state.redirect) {
    return <Redirect to={`/user/${userId}/lists/${listId}/frogs`}/>
  } else {
  } return(
    <div>
    <div className="navbar">
    <Link to={`/user/${userId}`}>Home</Link>
    <Link to={`/user/${userId}/lists/${listId}/frogs`}>Back to Frogs</Link>
    </div>
      <div>
        <h3>Edit Frog</h3>
          <div>
            <form onSubmit={this._handleSubmit}>
                <input type="text"  onChange={this._handleChange}
                    value={this.state.editFrog.morph} name="morph" placeholder="Frog morph" required/>
                <input type="text" onChange={this._handleChange}
                    value={this.state.editFrog.scientificName} name="scientificName" placeholder="Scientific Name" required/>
                <input type="text" onChange={this._handleChange}
                    value={this.state.editFrog.description} name="description" placeholder="Description" required/>
                {/* <input type="text" onChange={this._handleChange}
                    value={this.state.editFrog.image} name="image" placeholder="URL to Frog Image" required/> */}
                <input type="number" onChange={this._handleChange}
                    value={this.state.editFrog.care} name="care" placeholder="Ease of care rating" required/>
                <input className="button" type="submit" value="Add Frog" />
            </form>
          </div>
      </div>
      </div>
    )
  }
}

export default EditFrog;