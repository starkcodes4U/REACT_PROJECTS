import React from 'react';
import StatusBadge from './components/StatusBadge';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Status Indicators</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <StatusBadge status="success" />
        <StatusBadge status="error" />
        <StatusBadge status="warning" />
      </div>
    </div>
  );
}

export default App;
