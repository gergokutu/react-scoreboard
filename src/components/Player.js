import React, { Component } from "react";
import PropTypes from "prop-types";
import './Player.css'

export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    incrementScore: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.incrementScore(this.props.id)
  }

  render() {
    return (
      <div className="player">
        <p className="name">Name: { this.props.name }</p>
        <p className="name">Score: { this.props.score }</p>
        <button className="plus-button" onClick={this.handleClick}>Add +1</button>
      </div>
    )
  }
}