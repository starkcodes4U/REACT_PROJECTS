// src/components/NavBar.js
import React, { useState } from 'react';
import NavItem from './NavItem';
import './styles/NavBar.css';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="nav-container">
      <div className="nav-logo">JAGANNATH'S NavBar</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <NavItem
            key={item}
            label={item}
            active={activeTab === item}
            onClick={() => setActiveTab(item)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
