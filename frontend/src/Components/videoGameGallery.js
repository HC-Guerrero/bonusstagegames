import axios from 'axios';
import { useState, useEffect } from 'react';
import VideoGames from './videoGameCard';

export default function VideoGameCardGallery() {
  const URL = process.env.REACT_APP_API_URL;
  const [games, getAllVideoGames] = useState([]);
  useEffect(() => {
    renderComponent();
  }, []);

  const renderComponent = async () => {
    await axios
      .get(`${URL}/videoGames`)
      .then((response) => getAllVideoGames(response.data.payload))
      .catch((error) => console.log(error.message));
  };
  console.log(games);
  return (
    <div id='videoGameGallery'>
      <div id='videoGameTableContents'>
        {games.map((game) => {
          return <VideoGames key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}
