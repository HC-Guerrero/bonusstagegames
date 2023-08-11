import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowMore() {
  const URL = process.env.REACT_APP_API_URL;
  const [games, getAVideoGame] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/videoGames/${id}`)
      .then((response) => getAVideoGame(response.data.payload))
      .catch((error) => console.log(error.message));
  }, [URL, id]);
  return (
    <div
      id='aVideoGameCard__Div'
      className='max-w-sm rounded overflow-hidden shadow-lg border-red'
    >
      <img
        src={games?.image}
        id='aVideoGame__image'
        className='w-full rounded-3xl border-logored '
        height='300'
        width='200'
        alt='game thumbnail'
      />
      <h2 className='aGameName'>{games?.name}</h2>
      <p className='aGameGenre'>{games?.genre}</p>
      <p className='aGamePlatforms'>{games?.platforms}</p>
      <p className='aGameESRB'>{games?.esrb_rating}</p>
      <p className='aGamePrice'>{games?.price}</p>
      <p className='aGameAbout'>{games?.about}</p>
    </div>
  );
}
