import React, { Component } from "react"
import Player from "./Player"

export default class Scoreboard extends Component {
  state = {
      players: [
          {id:1, name:'Gergo', score: 2},
          {id:2, name:'Kelley', score: 5},
          {id:3, name:'Mimi', score: 4}
      ]
  }

  render() {
    const players_copy = [ ...this.state.players ]
    players_copy.sort((a, b) => b.score - a.score)   
    return (
      <div className="scoreboard">
          {players_copy.map(this.renderPlayer)}
      </div>
    )
  }

  renderPlayer = player => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        incrementScore={this.incrementScoreOfPlayer}
      />
    )
  }

  incrementScoreOfPlayer = (id) => {
    // Making a new array with the same objects except for the
    //  one that should be updated,
    const updatedPlayers = this.state.players.map(player => {
        if (player.id === id) {
          // ...which we replace with a copy of the original,
          //  except for the property `score` which is incremented
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
      // Finally, we use `this.setState` to replace the players array
      this.setState({ players: updatedPlayers });

    // // shorter form
    //   this.setState({
    //     players: this.state.players.map(player => (
    //       player.id === id
    //         ? { ...player, score: player.score + 1 }
    //         : player
    //     ))
    //   });
  }

}