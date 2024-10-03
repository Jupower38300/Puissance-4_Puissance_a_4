import { useState } from 'react';
import './App.css';
import * as Board from './components/Board.jsx'

import * as Button  from './components/button';
import { InputText } from './components/input';
import { Token, TokenActive, TokenPlay } from './components/tokens';
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="App bg-black flex justify-center items-center h-screen">
      <header className="App-header">
        <Board.Board rows={6} cols={7} />
        <Button.ButtonDarkBlue text='Jouer'/>
        <Button.ButtonLightBlue text='Jouer'/>
      </header>
      {/* modification à supprimer Bastian*/}
      <Token />
      <TokenActive />
      <TokenPlay/>
      <InputText value={inputValue} onChange={handleChange} placeholder={'Entrer votre pseudo...'}/>
    </div>
  );
}

export default App;
