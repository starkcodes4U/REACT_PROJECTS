// src/App.js
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Website</h1>
        <p>Select a tab to navigate.</p>
      </div>
    </div>
  );
}

export default App;
