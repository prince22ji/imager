import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import TopNavbar from "./navbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import Gallery from "./photos/Gallery/Gallery";
import Home from "./photos/Home/Home";
// import axios from './axios'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <div className="mainContent">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
        {/* <div className="navbar"> */}
        <Navbar />
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
