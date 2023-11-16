import '../Styles/videoGameCard.scss';
function VideoGames({ game }) {
  const URL = process.env.REACT_APP_API_URL;
  const quantity = 0;
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
      <div className='mt-auto'>
        {quantity === 0 ? (
          <button id='cartButton' className='w-100'>
            {' '}
            +Add To Cart
          </button>
        ) : (
          <div
            class='d-flex align-items-center flex-column'
            style={{ gap: '.5rem' }}
          >
            <div
              class='d-flex align-items-center justify-content-center'
              style={{ gap: '.5rem' }}
            ></div>{' '}
            <button>-</button>
            <div>
              <span className='fs-3'>{quantity}</span> in cart
            </div>
            <button>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoGames;
