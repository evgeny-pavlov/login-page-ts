import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import './style.css'

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <nav>
      <ul>
        <li className='sidebar-item'><Link to="/notes">Notes</Link></li>
        <li className='sidebar-item'><Link to="/tasks">Tasks</Link></li>
      </ul>
    </nav>
    <div className='sidebar-item'>
      <Profile />
    </div>
  </div>
);

export default Sidebar;
