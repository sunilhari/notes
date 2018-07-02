import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const formatDate = (milliseconds) => {
  let date = new Date(milliseconds);
  let month = date.toLocaleDateString('en-us', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
const classes = ['is-primary', 'is-warning', 'is-info', 'is-danger', 'is-success', 'has-background-white-ter']
const Note = ({ id, index, createdDate, description }) => {
  let className = classes[(index % classes.length)];
  return (
    <div className='tile'>
      <article className={`${className} tile is-child notification`}>
        <p className="title">Note</p>
        <p className="subtitle">{formatDate(createdDate)}</p>
        <div className="content">
          {description}
        </div>
        <footer>
          <Link className="button is-medium" to={`/note/${id}`}>
            <span className="icon is-medium">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span>Edit</span>
          </Link>
        </footer>
      </article>
    </div>
  )
}

export default Note;

