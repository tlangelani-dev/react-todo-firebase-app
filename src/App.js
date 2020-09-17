import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';

const App = () => {
    const [todos, setTodos] = useState(['One', 'Two', 'Three']);
    const [input, setInput] = useState('');
    const addTodo = (e) => {
        setTodos([...todos, input]);
        setInput('');
    };

    return (
        <div className="app">
            <h1>App</h1>
            <FormControl>
                <InputLabel>What would you like to do?</InputLabel>
                <Input value={input} onChange={e => setInput(e.target.value)} />
            </FormControl>
            <Button
                variant="contained"
                color="secondary"
                disabled={input === ''}
                onClick={addTodo}
                >
                    Add
            </Button>
            <ul>
                {todos.map((todo, idx) => (
                    <Todo idx={idx} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default App;
