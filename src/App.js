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
    <div className="App bg-black flex justify-center items-center h-screen bg-violet-950 h-screen">
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
      <h1 className='text-8xl text-white flex justify-center items-center h-screen font-custom href="#circlePath"'><span class="inline-block rotate-[15deg]"></span>
        <span class="inline-block rotate-[-35deg]">P</span>
        <span class="inline-block rotate-[-27deg] pb-[8%] pl-4">U</span>
        <span class="inline-block rotate-[-23deg] pb-[15%] pl-0">I</span>
        <span class="inline-block rotate-[-15deg] pb-[20%] pl-0">S</span>
        <span class="inline-block rotate-[-5deg] pb-[23%]">S</span>
        <span class="inline-block rotate-[5deg] pb-[23%]">A</span>
        <span class="inline-block rotate-[10deg] pb-[21%]">N</span>
        <span class="inline-block rotate-[15deg] pb-[18%]">C</span>
        <span class="inline-block rotate-[25deg] pb-[13%]">E</span>
        <span class="inline-block rotate-[-5deg]" className='text-violet-950'>"</span>
        <span class="inline-block rotate-[30deg]">4</span></h1>
    </div>
  );
}

export default App;
