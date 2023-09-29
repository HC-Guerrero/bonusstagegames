import '../Styles/videoGameCard.scss';
function VideoGames({ game }) {
  const URL = process.env.REACT_APP_API_URL;

  return (
    <div
      id='videoGameCard__Div'
      className='max-w-sm rounded overflow-hidden shadow-lg border-red'
    >
      <img
        src={game?.image}
        id='videoGame__image'
        className='w-full rounded-3xl border-logored '
        height='300'
        width='200'
        alt='game image'
      />
      <div id='videoGameCard_textDiv'>
        <h2 className='gameName'>{game?.name}</h2>
        <p className='gameGenre'>Genre: {game?.genre}</p>
        <p className='gamePlatforms'>Platforms: {game?.platforms}</p>
        <p className='gameESRB'>ESRB Rating: {game?.esrb_rating}</p>
        <p className='gamePrice'>${game?.price}</p>
        <p className='gameAbout'>{game?.about}</p>
      </div>
    </div>
  );
}

export default VideoGames;
