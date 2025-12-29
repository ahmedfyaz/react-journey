import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const Navbar = () => {
    return (
        <div className={'nav'}>
            <h3>Sheriyans</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default Navbar
