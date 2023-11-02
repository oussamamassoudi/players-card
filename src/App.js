
import './App.css';
import Chvideo from './components/Chvideo';
import Navbarr from './components/Navbarr';
import Players from './components/Players';

function App() {
  return (
    <div className='back'>
      <Navbarr/>
      <Players/>
      <Chvideo/>
    </div>
  );
}

export default App;
