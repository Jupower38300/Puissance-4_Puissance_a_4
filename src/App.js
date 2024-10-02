import { useState } from 'react';
import './App.css';
import * as Button  from './components/button';
import { InputText } from './components/input';
import { Token, TokenActive, TokenPlay } from './components/tokens';
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="App bg-black h-[100vh]">
      <header className="App-header">
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
