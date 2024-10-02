import './App.css';
import * as Button from './components/button';

function App() {
  return (
    <div className="App bg-violet-950 h-screen">
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
      <Button.buttonJouer />
    </div>

  );
}

export default App;
