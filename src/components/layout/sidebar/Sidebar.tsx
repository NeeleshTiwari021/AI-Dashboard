import React, { useState } from 'react';
import './Sidebar.scss';
import { FaHome, FaChartBar, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <button className="sidebar__toggle" onClick={toggleSidebar}>
        {isOpen ? '☰' : '☰'}
      </button>
      <nav className="sidebar__menu">
        <Link to="/" className="sidebar__link">
          <FaHome className="sidebar__icon" />
          {isOpen && <span>Home</span>}
        </Link>
        <Link to="/analytics" className="sidebar__link">
          <FaChartBar className="sidebar__icon" />
          {isOpen && <span>Analytics</span>}
        </Link>
        <Link to="/settings" className="sidebar__link">
          <FaCogs className="sidebar__icon" />
          {isOpen && <span>Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
