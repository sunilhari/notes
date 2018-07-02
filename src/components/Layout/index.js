import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome';
import Navbar from '../Navbar';
import NewNote from '../NewNote';
const Layout = ({ showHideNavBar, isOpen }) => (
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
        <Switch>
          <Route path='/note/:id' component={NewNote} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </div>
  </div>
)
Layout.propTypes = {
  children: PropTypes.func
}
export default Layout;