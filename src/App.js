import './App.css';
import * as Board from './components/Board.jsx'

function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      <header className="App-header">
        <Board.Board rows={6} cols={7} />
      </header>
    </div>

  );
}

export default App;
