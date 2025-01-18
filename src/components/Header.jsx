import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex items-center justify-around p-3'>
      <div className='logo'>
        <h1 className='text-xl font-bold'>TODO</h1>
      </div>

      <div className='flex items-center gap-3 font-semibold menus'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact us</Link>
        <button className='px-4 py-1 text-white bg-blue-700 rounded-md hover:bg-blue-600'><Link to='/posts'>Posts</Link></button>
        
        <button className='px-3 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600'>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Header;