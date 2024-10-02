import './App.css';
import * as Button  from './components/button';
import { Token, TokenActive, TokenPlay } from './components/tokens';
function App() {
  return (
    <div className="App bg-black h-[100vh]">
      <header className="App-header">
        <Button.buttonJouer/>
      </header>
      {/* modification à supprimer Bastian*/}
      <Token />
      <TokenActive />
      <TokenPlay/>
    </div>

  );
}

export default App;
