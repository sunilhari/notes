import React, { Component } from 'react';
import Layout from '../Layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarState: false
    };
  }
  showHideNavBar = () => {
    this.setState({
      navBarState: !this.state.navBarState
    })
  }
  render() {
    return (
      <div className="App">
        <Layout showHideNavBar={this.showHideNavBar} isOpen={this.state.navBarState} />
      </div>
    );
  }
}

export default App;
