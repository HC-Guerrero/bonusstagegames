import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//Pages
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import Dashboard from './Components/Dashboard.js';
import HomePage from './Pages/home.js';
import GameGallery from './Pages/gallery.js';
import NavBar from './Components/navBar.js';
import UsersProfilePage from './Pages/usersProfilePage.js';
import ShowGame from './Pages/showGamePage.js';
import NewUserPage from './Pages/userSignUpPage.js';
import EditUserPage from './Pages/userEditPage.js';

const App = () => {
  const checkAuthenticated = async () => {
    const URL = process.env.REACT_APP_API_URL;
    try {
      const res = await fetch(`${URL}/auth/verify`, {
        method: 'POST',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Navigate to='/dashboard' />
              )
            }
          />
          <Route
            path='/register'
            element={<Register />}
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Navigate to='/dashboard' />
              )
            }
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
            render={(props) =>
              isAuthenticated ? (
                <Dashboard {...props} setAuth={setAuth} />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route path='/' element={<HomePage />} />
          {/*VideoGames */}
          <Route path='/videoGames' element={<GameGallery />} />
          <Route path='/videoGames/:id' element={<ShowGame />} />
          {/*Users */}
          <Route path='/users/:id' element={<UsersProfilePage />} />
          {/* <Route path='users/new' element={<NewUserPage />} /> */}
          <Route path='users/:id/edit' element={<EditUserPage />} />
          <Route path='users/new' element={<NewUserPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
