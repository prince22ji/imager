import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Gallery from "./photos/Gallery/Gallery";
import Home from "./photos/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/gallery" component={Gallery} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
