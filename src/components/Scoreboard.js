import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  state = {
      players: [
          {id:1, name:'Gergo', score: 2},
          {id:2, name:'Kelley', score: 5},
          {id:3, name:'Mimi', score: 4}
      ]
  }

  render() { 
    return (
      <div className="scoreboard">
          {this.state.players.map(player => <Player name={player.name} score={player.score}/>)}
      </div>
    )
  }
}