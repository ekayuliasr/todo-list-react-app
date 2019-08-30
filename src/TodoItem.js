import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default props => (
    <div>
        <div style={{textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <button onClick={props.onDelete}>Delete</button>
    </div>
);
