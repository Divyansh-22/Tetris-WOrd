
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Tetris from './Components/Tetris';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Tetris/>
      <Footer/>
    </div>
  );
}

export default App;
