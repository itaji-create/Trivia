import React, { Component } from 'react';
import Players from '../components/Players';

class Ranking extends Component {
  handleClick = () => {
    window.location.pathname = '/';
  }

  render() {
    const playersInfo = JSON.parse(localStorage.getItem('ranking'));
    playersInfo.sort((a,b) => {
      return b.score < a.score ? -1 : b.score > a.score ? 1 : 0;
  });
    console.log(playersInfo);

    return (
      <div className="allPage">
        <section className="feedback">
          <h2 data-testid="ranking-title">Ranking</h2>
          {playersInfo ? (
            playersInfo.map((player, index) => (
              <Players
                key={ index }
                email={ player.email }
                index={ index }
                name={ player.userName }
                score={ player.score }
              />
          ))): <Players score="0" name="Seja o primeiro"/>}
          <button
            onClick={ this.handleClick }
            type="button"
            data-testid="btn-go-home"
          >
            Play Again
          </button>
        </section>
      </div>
    );
  }
}

export default Ranking;
