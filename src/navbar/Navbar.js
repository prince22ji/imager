import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<h1>IMAGER</h1>
			</div>
			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/gallery">
					<li>Gallery</li>
				</Link>
				<Link to="/top_picks">
					<li>Top Picks</li>
				</Link>
				<Link to="/top_rated">
					<li>Top Rated</li>
				</Link>
				<Link to="/about">
					<li>About Us</li>
				</Link>
			</ul>
		</div>
	);
}
export default Navbar;
