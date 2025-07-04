import React, { useState } from 'react';
import './App.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const themeStyle = {
    backgroundColor: isDark ? '#333' : '#f0f0f0',
    color: isDark ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s',
  };

  return (
    <div style={themeStyle}>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button className="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
