import React from 'react';
import Db from '../../storage';
import Notes from '../Notes';
const StaticContent = () => (
  <div className="container has-text-centered">
    <p className="title">
      Notes it is ...
  </p>
    <p className="subtitle">
      Subtitle
  </p>
  </div>
)
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    Db.getAllNotes().then((notes) => this.setState({ notes }));
  }
  render() {
    let { notes } = this.state;
    if (notes.length > 0) {
      return <Notes notes={notes} />
    }
    return <StaticContent />
  }
}
export default Welcome;