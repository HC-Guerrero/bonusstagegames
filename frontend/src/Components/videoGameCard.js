function VideoGames({ game }) {
  const URL = process.env.REACT_APP_API_URL;

  return (
    <div
      id='videoGameCard__Div'
      className='max-w-sm rounded overflow-hidden shadow-lg border-red'
    >
      {console.log('Hi my name is Bob' + game)}
      <img
        src={game?.image}
        id='videoGame__image'
        className='w-full rounded-3xl border-logored '
        height='300'
        width='200'
        alt='game image'
      />
      <h2 className='gameName'>{game?.name}</h2>
      <p className='gameGenre'>{game?.genre}</p>
      <p className='gamePlatforms'>{game?.platforms}</p>
      <p className='gameESRB'>{game?.esrb_rating}</p>
      <p className='gamePrice'>{game?.price}</p>
      <p className='gameAbout'>{game?.about}</p>
    </div>
  );
}

export default VideoGames;
