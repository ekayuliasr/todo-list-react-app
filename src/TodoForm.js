import React from 'react';
import { Form, Button } from 'react-bootstrap';
import shortid from 'shortid';

export default class TodoForm extends React.Component {

    state = {
        text: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });

        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className = "row">
                    <Form.Group className="col-2">
                         <Form.Control name="text" value={ this.state.text } onChange={this.handleChange} placeholder="Input your task" />
                    </Form.Group>
               
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </div>
            </Form>
        );
    }
}