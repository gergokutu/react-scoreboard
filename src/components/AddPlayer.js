import React, { Component } from 'react';
import './AddPlayer.css'

export default class AddPlayer extends Component {
    state = {name:''}
  
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addPlayer(this.state.name)
      this.setState({name: ''})
    }
    
    // // not necessary because it's handeled...
    // // ... on 1 line » {e => this.setState({ name: e.target.value })}
    // handleChange = (event) => {
    //   console.log(event, event.target, event.target.name)
    //   this.setState({
    //     name: event.target.value
    //   })
    // }
    // // generic solution
    // handleChange = (event) => {
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   })
    // }
  
    render() {
      return (
        <div className="add-player">
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Name:</span>
              <input
                type="text"
                name="name"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </label>
            <input type="submit" value="Add" />
          </form>
        </div>
      )
    }
  }