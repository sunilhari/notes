import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Db from '../../storage';
import Layout from '../Layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarState: false
    };
    Db.init();
  }
  showHideNavBar = () => {
    this.setState({
      navBarState: !this.state.navBarState
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout showHideNavBar={this.showHideNavBar} isOpen={this.state.navBarState} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
