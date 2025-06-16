// src/components/NavItem.js
import React from 'react';

const NavItem = ({ label, active, onClick }) => {
  return (
    <div
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default NavItem;
