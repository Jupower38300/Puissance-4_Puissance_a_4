import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.jsx';
import Home from './pages/Home.js';
import Game from './pages/Game.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/game' element={<Game />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
