import axios from 'axios';
import { useState, useEffect } from 'react';
import VideoGames from './videoGameCard';

export default function VideoGameCardGallery() {
  const URL = process.env.REACT_APP_API_URL;
  const [games, getAllVideoGames] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/videoGames`)
      .then((response) => getAllVideoGames(response.data.payload))
      .catch((error) => console.log(error.message));
  }, [URL]);

  return (
    <div id='videoGameGallery'>
      <table id='videoGameTable'>
        <strong>
          <h1> Table of Games</h1>
          <h2 className='homeDesc'>
            {' '}
            BonusStageGames is a site dedicated to gamers to lookup, review, and
            buy games dating all the way back to the Atari 2600 to the present
            day PS5, Xbox Series X, Switch, and even PCs.{' '}
          </h2>
        </strong>
        <tbody id='videoGameTableContents'>
          {games.map((game) => {
            return <VideoGames key={game.id} info={game} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
