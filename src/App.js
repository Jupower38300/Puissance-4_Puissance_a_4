import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.jsx';
import { Room } from './pages/room.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/rooms' element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
