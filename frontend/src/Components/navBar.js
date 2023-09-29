import { Link } from 'react-router-dom';
import React from 'react';
import '../Styles/navBar.scss';

const NavBar = () => {
  return (
    <div id='navBar__containDiv' className='flex items-center justify-between'>
      <img id='navBar__Logo' />
      <p>Logo</p>
      <div id='navBar__buttonDiv'>
        <Link to={`/videoGames`}>
          <button>
            <div id='navBar__ButtonDiv1'>
              <img id='navBar__img1' />
              <p>VideoGames</p>
            </div>
          </button>
        </Link>
        <Link to={`/users/new`}>
          <button>
            <div id='navBar__ButtonDiv2'>
              <img id='navBar__img2' />
              <p>Sign Up</p>
            </div>
          </button>
        </Link>
        <Link to={`/`}>
          <button>
            <div id='navBar__ButtonDiv3'>
              <img id='navBar__img3' />
              <p>Home</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
