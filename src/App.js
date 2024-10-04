import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup.jsx';
import Test from './pages/Test.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
