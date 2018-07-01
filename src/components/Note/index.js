import React from 'react';

const Note = ({ id, createdBy, createdDate, description }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        Note #{id}
    </p>
    </header>
    <div className="card-content">
      <div className="content">
        {description}
        <br />
        <time>{createdDate}</time>
      </div>
    </div>
    <footer className="card-footer">
      <a href="#" className="card-footer-item">Edit</a>
      <a href="#" className="card-footer-item">Delete</a>
    </footer>
  </div>
)

export default Note;