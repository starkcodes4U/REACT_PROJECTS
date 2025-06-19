import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>📝 TODO LIST</h2>
        <div style={styles.inputGroup}>
          <input
            type="text"
            value={text}
            placeholder="Add a task"
            onChange={(e) => setText(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleAdd} style={styles.button}>Add</button>
        </div>
        <ul style={styles.list}>
          {todos.map(todo => (
            <li key={todo.id} style={styles.todoItem}>
              <span
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                style={{
                  ...styles.text,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#000'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                style={styles.delete}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
        <div style={styles.stats}>
          ✅ Completed: {completedCount} &nbsp;&nbsp; ⏳ Pending: {pendingCount}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '400px',
    fontFamily: 'sans-serif',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '10px',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  text: {
    cursor: 'pointer',
  },
  delete: {
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#e74c3c',
  },
  stats: {
    fontSize: '14px',
    color: '#555',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default App;
