import React from 'react';
import Note from '../Note';
const Notes = ({ notes = [] }) => (
  <div className='columns is-multiline is-mobile'>{
    notes.map((note,index) => (
      <div className='column' key={note.id} >
        <Note {...note} index={index}/>
      </div>
    ))
  }
  </div>
)
export default Notes;