import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.jsx';
import { Room } from './pages/room.jsx';
import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/game' element={<Game />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/rooms' element={<Room />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
