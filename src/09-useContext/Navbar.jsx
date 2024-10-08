import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/"
                        >
                        HomePage
                    </NavLink>
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/about"
                        >
                        About
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/login"
                        >
                        LogIn
                    </NavLink>
                    
                </ul>
        
            </div>
        </div>
    </nav>
  )
}

export default Navbar
