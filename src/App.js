import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
