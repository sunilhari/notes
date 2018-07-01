import React from 'react';
import Db from '../../storage';
import { Redirect } from 'react-router-dom';
class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      saved: false
    }
  }
  handleDescription = (event) => {
    let description = event.target.value;
    this.setState({
      description: description
    })
  }
  insertDescription = () => {
    Db.insert({
      tags: '',
      description: this.state.description,
      createdBy: '',
      createdDate: new Date().getTime(),
      modifiedDate: new Date().getTime()
    })
    this.setState({ saved: true })
  }
  render() {
    if (this.state.saved) {
      return <Redirect to='/' />
    }
    else {
      return <div className='container'>
        <div className="field">
          <div className="control is-large">
            <textarea className="textarea is-large" type="text" placeholder="Note it" onInput={this.handleDescription} value={this.state.description}></textarea>
          </div>
        </div>
        <a className="button is-large is-danger" onClick={this.insertDescription}>Note It</a>
      </div>
    }
  }
}

export default Note;