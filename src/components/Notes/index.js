import React from 'react';
import Note from '../Note';
const Notes = ({ notes = [] }) => (
  <div className='columns is-multiline is-mobile'>{
    notes.map(note => (
      <div className='column' key={note.id}>
        <Note {...note} />
      </div>
    ))
  }
  </div>
)
export default Notes;