import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Players from '../components/Players';
import Header from '../components/Header';

class Ranking extends Component {
  handleClick = () => {
    window.location.pathname = '/';
  }

  render() {
    const playersInfo = JSON.parse(localStorage.getItem('ranking'));

    return (
      <div id="allPage">
        <Header />
        <section id="feedback">
          <h1 data-testid="ranking-title">Ranking</h1>
          {playersInfo ? (
            playersInfo.map((player, index) => (
              <Players
                key={ index }
                src={ player.picture }
                index={ index }
                name={ player.name }
                score={ player.score }
              />
          ))): <Players score="0" name="Seja o primeiro"/>}
          <button
            onClick={ this.handleClick }
            type="button"
            data-testid="btn-go-home"
          >
            Jogue Novamente
          </button>
        </section>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Ranking;
