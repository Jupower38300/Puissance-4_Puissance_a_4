import './App.css';
import * as Button  from './components/button';
import { Token, TokenActive } from './components/tokens';
function App() {
  return (
    <div className="App bg-black h-[100vh]">
      <header className="App-header">
        <Button.buttonJouer/>
      </header>
      {/* modification à supprimer Bastian*/}
      <Token />
      <TokenActive />
    </div>

  );
}

export default App;
