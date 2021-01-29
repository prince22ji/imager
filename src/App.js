import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Gallery from "./photos/Gallery/Gallery";
import Home from "./photos/Home/Home";
// import axios from './axios'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
