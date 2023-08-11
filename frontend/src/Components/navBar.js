import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import '../Styles/navBar.scss';
import { useState } from 'react';

const NavBar = () => {
  return (
    <div id='navBar__containDiv' className='flex items-center justify-between'>
      <img id='navBar__Logo' />
      <p>Logo</p>
      <div id='navBar__buttonDiv'>
        <Link>
          <button>
            <div id='navBar__ButtonDiv1'>
              <img id='navBar__img1' />
              <p>Button 1</p>
            </div>
          </button>
        </Link>
        <Link>
          <button>
            <div id='navBar__ButtonDiv2'>
              <img id='navBar__img2' />
              <p>Button 2</p>
            </div>
          </button>
        </Link>
        <Link>
          <button>
            <div id='navBar__ButtonDiv3'>
              <img id='navBar__img3' />
              <p>Button 3</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
