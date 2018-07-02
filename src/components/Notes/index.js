import React from 'react';
import Note from '../Note';
const Notes = ({ notes = [] }) => (
  <div className="columns is-mobile is-multiline">
    {
      notes.map((note, index) => (
        <Note {...note} index={index} key={note.id} />
      ))
    }
  </div>
)
export default Notes;

