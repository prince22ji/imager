import './App.css';
import Navbar from './navbar/Navbar'
import Home from './photos/Home/Home'
// import axios from './axios'
function App() {
  return (
    <div className="App">
      <div className="photos_div">
      <Home />
      </div>
      <div className="navbar-div">
      <Navbar />
      </div>
    </div>
  );
}

export default App;
