import React from 'react';
import Greeting from './components/Greeting';

function App() {
  const userName = 'Jagannath'; // dynamic value

  return (
    <div>
      <h1>Welcome to the Greeting App</h1>
      <Greeting name={userName} />
    </div>
  );
}

export default App;
