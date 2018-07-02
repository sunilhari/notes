import React from 'react';
import Db from '../../storage';
import { Redirect } from 'react-router-dom';
class Note extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      description: '',
      saved: false,
      id: Number(id)
    }
  }
  handleDescription = (event) => {
    let description = event.target.value;
    this.setState({
      description: description
    })
  }
  insertDescription = () => {
    let { id } = this.state;
    let request = {
      tags: '',
      description: this.state.description,
      createdBy: '',
      createdDate: new Date().getTime(),
      modifiedDate: new Date().getTime()
      //id: id !== -1 ? id : ''
    };
    if (id !== -1) {
      request['id'] = id;
      Db.update(request);
    }
    else {
      Db.insert(request);
    }
    this.setState({ saved: true })
  }
  componentDidMount() {
    let { id } = this.state;
    if (id !== -1) {
      Db.fetchById(id).then((note) => {
        this.setState({
          description: note.description,
          createdDate: note.createdDate
        })
      });
    }
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
        <a className="button is-large is-danger" onClick={this.insertDescription}>{this.state.id !== -1 ? 'Update' : 'Note It'}</a>
      </div>
    }
  }
}

export default Note;