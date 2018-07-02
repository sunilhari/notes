import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ showHideNavBar, isOpen }) => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to='/'>
          <p className='title is-2'>Notes</p>
        </Link>
        <span className={isOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'} onClick={showHideNavBar} data-target="navbarMenuHeroB">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" className={isOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-end">
          <span className="navbar-item">
            <Link className="button is-info is-inverted" to='/note/-1'>
              <span>Add Note</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;
/*
 <a className="navbar-item is-active">Home</a>
  <a className="navbar-item">Notes</a>
*/