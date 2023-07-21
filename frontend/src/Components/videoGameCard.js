export default function VideoGames({ videoGame }) {
  console.log(videoGame);
  return (
    <div className='gameDivContainer'>
      <h1 className='gameName'>{videoGame.name}</h1>
      <p className='gameGenre'>{videoGame.genre}</p>
      <p className='gamePlatforms'>{videoGame.platforms}</p>
      <p className='gameESRB'>{videoGame.esrb_rating}</p>
      <p className='gamePrice'>{videoGame.price}</p>
      <p className='gameAbout'>{videoGame.about}</p>
    </div>
  );
}
