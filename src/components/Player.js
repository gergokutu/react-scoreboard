import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="player">
        <p className="name">{ this.props.name }</p>
        <p className="name">{ this.props.score }</p>
      </div>
    )
  }
}