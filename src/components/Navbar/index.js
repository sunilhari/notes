import React from 'react';

const Navbar = ({ showHideNavBar, isOpen }) => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <p className='title is-2'>Notes</p>
        </a>
        <span className={isOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'} onClick={showHideNavBar} data-target="navbarMenuHeroB">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" className={isOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-end">
          <a className="navbar-item is-active">Home</a>
          <a className="navbar-item">Notes</a>
          <span className="navbar-item">
            <a className="button is-info is-inverted">
              <span>Add Note</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;