import React from 'react';
import Note from '../Note';
const Notes = ({ notes = [] }) => (
  <div className="tile is-ancestor">
    <div className="tile is-4 is-parent">{
      notes.map((note, index) => (
        <Note {...note} index={index} key={note.id} />
      ))
    }
    </div>
  </div>
)
export default Notes;

