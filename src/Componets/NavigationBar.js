import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import your navigation bar CSS file for styling

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <h1>React App</h1>
      <button className="menu-btn" onClick={toggleMenu}>
        <div>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        </div>
      </button>
      <ul className={showMenu ? 'show' : ''} id='unorder'>
        <li className='list'>
          <Link to="/">Home</Link>
        </li>
        <li className='list'>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className='list'>
          <Link to="/counter">Number Counter</Link>
        </li>
        <li className='list'>
          <Link to="/SeachFilter">SearchFilter</Link>
        </li>
        <li className='list'>
        <Link to="/DataGrid">DataGrid</Link>
      </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;