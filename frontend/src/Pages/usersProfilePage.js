import UsersProfile from '../Components/usersProfile';
import { Link } from 'react-router-dom';
export default function UsersProfilePage() {
  return (
    <section>
      <h1>Bonus Stage Game User</h1>
      <UsersProfile></UsersProfile>
      <Link to={`/videoGames`}>
        <button>
          <div id='navBar__ButtonDiv2'>
            <img id='navBar__img2' />
            <p>Back To VideoGames</p>
          </div>
        </button>
      </Link>
    </section>
  );
}
