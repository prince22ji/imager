import React from 'react'
import './navbar.css'
import {BrowserRouter as Router,Link ,Switch, Route} from 'react-router-dom'
function Navbar(){
    return(
        <Router>
        <div className="navbar">
            <div className="logo">
            <h1>
                IMAGER
            </h1>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="gallery">Gallery</Link></li>
                <li><Link to="top_picks">Top Picks</Link></li>
                <li><Link to="top_rated">Top Rated</Link></li>
                <li><Link to="about">About Us</Link></li>
            </ul>
        </div>
        </Router>
    )
}
export default Navbar