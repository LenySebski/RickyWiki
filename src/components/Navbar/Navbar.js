import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <Link to="/">
            <h1>Rick and Morty wiki</h1>
            </Link>
            </div>
            <NavLink to="/" className="nav-link">
                Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
                Episode
            </NavLink>
            <NavLink
                activeClassName="active" className="nav-link"
                to="/location" >
                    Location
            </NavLink>
        </div>
    )
}

export default Navbar
