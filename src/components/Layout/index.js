import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content from '../Content';
import Navbar from '../Navbar';
const Layout = ({ children, showHideNavBar, isOpen }) => (
  <div className='container-fluid'>
    <Helmet
      title="Notes"
      meta={[
        { name: 'description', content: 'Notes' },
        { name: 'keywords', content: 'IndexDB' },
      ]}
    />
    <div className='hero is-info is-fullheight'>
      <div className="hero-head">
        <Navbar showHideNavBar={showHideNavBar} isOpen={isOpen} />
      </div>
      <div className="hero-body">
        <Content />
      </div>
    </div>
  </div>
)
Layout.propTypes = {
  children: PropTypes.func
}
export default Layout;