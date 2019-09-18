import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

import { FaCode, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const signInlinks = (
        <ul className="nav">
            <li> <NavLink to="/profiles"> Developers </NavLink> </li>
            <li> <NavLink to="/posts"> Posts </NavLink> </li>
            <li>
                <NavLink to="/dashboard">
                    <FaUser /><span className='hide-sm'> Dashboard</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="#!" onClick={ logout }>
                    <FaSignOutAlt /><span className='hide-sm'> Logout</span>
                </NavLink>
            </li>
        </ul>
    )

    const signedOutLinks = (
        <ul className="nav">
            <li><NavLink to="/profiles">Developers</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><FaCode /> DevConnector</Link>
            </h1>
            { !loading && (<Fragment>{ isAuthenticated ? signInlinks : signedOutLinks }</Fragment>) }
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
