import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

const Todo = ({idx, todo}) => {
    return (
        <div className="todo">
            <List className="list" key={idx}>
                <ListItem>
                    <ListItemText primary="Todo" secondary={todo}></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo;