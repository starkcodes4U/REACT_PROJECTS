import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(['Learn React', 'Read Docs']);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>Todo List</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <input type="checkbox" />
              <span>{todo}</span>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
