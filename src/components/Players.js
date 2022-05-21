import React from 'react';
import { PropTypes } from 'prop-types';
import md5 from 'crypto-js/md5';

class Players extends React.Component {
  render() {
    const { email, name, score, index } = this.props;
    const hash = md5(email).toString();
    return (
      <table id="table-ranking">
        <tr>
          <td><img src={ `https://www.gravatar.com/avatar/${hash}` } alt="player" /></td>
          <th>Player:</th>
          <td data-testid={ `player-name-${index}` }>{ name }</td>
          <th>Score:</th>
          <td data-testid={ `player-score-${index}` }>{ score }</td>
        </tr>
      </table>
    );
  }
}

Players.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default Players;
