import React, { Component } from 'react';


class AddFrog extends Component {
  constructor() {
    super();
    this.state = {
      newFrog: {
        morph: '',
        scientificName: '',
        description: '',
        picture: '',
        care: ''
      },
    }
  }

_handleChange = event => {
    const attributeName = event.target.name;
         const attributeValue = event.target.value;

         const newFrog = { ...this.state.newFrog };
         newFrog[attributeName] = attributeValue;

         this.setState({ newFrog })
 };
 _handleSubmit = (e) => {
   e.preventDefault()
   this.props.handleAddFrog(this.state.newFrog, this.props.listId)
};


render () {
    return(
      <div>
        <h3>New Frog</h3>
          <div>
            <form onSubmit={this._handleSubmit}>
                <input type="text"  onChange={this._handleChange}
                    value={this.state.newFrog.morph} name="morph" placeholder="Frog morph" required/>
                <input type="text" onChange={this._handleChange}
                    value={this.state.newFrog.scientificName} name="scientificName" placeholder="Scientific Name" required/>
                <input type="text" onChange={this._handleChange}
                    value={this.state.newFrog.description} name="description" placeholder="Description" required/>
                <input type="text" onChange={this._handleChange}
                    value={this.state.newFrog.image} name="image" placeholder="URL to Frog Image" required/>
                <input type="number" onChange={this._handleChange}
                    value={this.state.newFrog.care} name="care" placeholder="Ease of care rating" required/>
                <input className="button" type="submit" value="Add Frog" />
            </form>
          </div>
      </div>
    )
  }
}

export default AddFrog;