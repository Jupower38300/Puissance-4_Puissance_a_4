import { useState } from 'react';
import './App.css';
import * as Board from './components/Board.jsx'

import * as Button  from './components/button';
import { InputText } from './components/input';
import { Token, TokenActive, TokenPlay } from './components/tokens';
import Game from './pages/Game.jsx';
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="App bg-black flex justify-center items-center h-screen bg-violet-950 h-screen">
        <Game/>
    </div>

  );
}

export default App;
