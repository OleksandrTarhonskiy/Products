import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <Link to='/'>
        {'<'} Back to main page
      </Link>
    </div>
  );
}

export default NotFound;