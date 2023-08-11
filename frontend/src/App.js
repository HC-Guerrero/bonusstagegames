import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home.js';
import GameGallery from './Pages/gallery.js';
import NavBar from './Components/navBar.js';
import UsersProfilePage from './Pages/usersProfilePage.js';
import ShowGame from './Pages/showGamePage.js';
import NewUserPage from './Pages/userSignUpPage';
import EditUserPage from './Pages/userEditPage.js';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/*VideoGames */}
          <Route path='/videoGames' element={<GameGallery />} />
          <Route path='/videoGames/:id' element={<ShowGame />} />
          {/*Users */}
          <Route path='/users/:id' element={<UsersProfilePage />} />
          <Route path='users/new' element={<NewUserPage />} />
          <Route path='users/:id/edit' element={<EditUserPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
