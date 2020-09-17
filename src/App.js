import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState(['One', 'Two', 'Three']);
    const [input, setInput] = useState('');
    return (
        <div className="app">
            <h1>App</h1>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button>Add</button>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
