import React from 'react';

const formatDate = (milliseconds) => {
  let date = new Date(milliseconds);
  let month = date.toLocaleDateString('en-us', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
const classes = ['has-background-white', 'has-background-light', 'has-background-primary', 'has-background-warning', 'has-background-danger', 'has-background-white-ter']
const Note = ({ id, index, createdDate, description }) => {
  let className = classes[(index % classes.length)];
  return <div className={`${className} card`}>
    <header className="card-header">
      <p className="card-header-title">
        Note #{id}
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        {description}
        <br />
        <time>{formatDate(createdDate)}</time>
      </div>
    </div>
    <footer className="card-footer">
      <a href="#" className="card-footer-item">Edit</a>
      <a href="#" className="card-footer-item">Delete</a>
    </footer>
  </div>
}

export default Note;

