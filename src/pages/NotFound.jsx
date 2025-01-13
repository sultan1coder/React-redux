import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='p-4 m-4 text-center border rounded-md'>
      <h1 className='my-3 text-4xl font-bold'>404</h1>
      <p className='text-2xl'>The page your're looking for does not exist.</p>
      <button className='p-3 my-4 text-white bg-blue-600 rounded-md hover:bg-blue-500'>
        <Link to='/'>Back to home</Link>
      </button>
    </div>
  );
};

export default NotFound;