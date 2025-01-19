import React from 'react';
import './Header.scss';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>AI Dashboard</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
        <button className="header__search-button">
          <FaSearch />
        </button>
      </div>
      <div className="header__profile">
        <FaUserCircle size={30} />
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;
