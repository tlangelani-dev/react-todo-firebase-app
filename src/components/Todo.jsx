import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { db } from './../firebase';

const Todo = ({todo}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(todo.todo);

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo:input
        }, { merge: true });
        setOpen(false);
    };

    return (
        <div className="todo">
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                <div className="todo-modal">
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <input value={input} onChange={e => setInput(e.target.value)} />
                    <Button variant="contained" onClick={updateTodo}>
                        Update
                    </Button>
                </div>
            </Modal>
            <List className="list">
                <ListItem>
                    <ListItemText primary={todo.todo} secondary="Todo"></ListItemText>
                </ListItem>
                <Button
                    onClick={e => setOpen(true)}
                    variant="contained"
                    color="primary"
                >
                    Edit
                </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={e => db.collection('todos').doc(todo.id).delete()}
                    startIcon={<DeleteIcon />}
                    >
                    Delete
                </Button>
            </List>
        </div>
    )
}

export default Todo;
