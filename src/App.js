import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel, Typography } from '@material-ui/core';
import Todo from './components/Todo';
import { db } from './firebase';
import * as firebase from 'firebase/app';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        db.collection('todos').add({
            todo: input,
            created_at: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    };

    // on app load, fetch todos from firebase
    useEffect(() => {
        db.collection('todos').orderBy('created_at', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        });
    }, []);

    const onInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            addTodo(e);
        }
    }

    return (
        <div className="app">
            <h1>App</h1>
            <FormControl>
                <InputLabel>What would you like to do?</InputLabel>
                <Input value={input} onChange={e => setInput(e.target.value)} onKeyUp={onInputKeyUp} />
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
                {todos.length === 0 && (
                    <Typography variant="h6">You have no Todos today!</Typography>
                )}
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default App;
