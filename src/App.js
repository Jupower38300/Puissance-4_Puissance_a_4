import './App.css';
import * as Button  from './components/button';
import * as Board from './components/Board.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button.buttonJouer/>
        <Board.Board rows={6} cols={7} />
      </header>
    </div>

  );
}

export default App;
