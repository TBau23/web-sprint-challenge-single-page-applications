import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav >
        <ul className='nav-links'>
            <Link  to='/order'>
                <li>Create your Pizza</li>
            </Link>
            <Link  to='/'>
                <li>Home</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;