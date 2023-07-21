import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home.js';
import GameGallery from './Pages/gallery.js';
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/videoGames' element={<GameGallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
