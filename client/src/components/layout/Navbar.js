import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><FaCode /> DevConnector</Link>
            </h1>
            <ul class="nav">
                <li><NavLink to="profiles.html">Developers</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
