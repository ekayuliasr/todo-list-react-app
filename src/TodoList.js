import React from 'react';
import { Button } from 'react-bootstrap';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default class TodoList extends React.Component {

    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
    }

    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        todo, complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }));
    };
  
    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    };

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    };

    onToggleAllComplete = () => {
        this.setState(state => ({
            todos: state.todos.map(todo => ({
                todo, complete: state.toggleAllComplete
            })),
            toggleAllComplete: !state.toggleAllComplete
        }))
    }
           

    render() {
        let todos = [];
        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <React.Fragment>
                <div >
                    <TodoForm onSubmit={this.addTodo}/>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))
                    }
                    <div>
                        todos left: {this.state.todos.filter(todo => !todo.complete).length}
                    </div>
                    <div>
                        <button onClick={() => this.updateTodoToShow("all")}>all</button>
                        <button onClick={() => this.updateTodoToShow("active")}>active</button>
                        <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
                    </div>

                    {this.state.todos.some(todo => todo.complete) ? (
                        <div>
                            <button onClick={this.removeAllTodosThatAreComplete}>
                                remove all complete todos
                            </button>
                        </div>
                    ) : null}

                    <div>
                        <button onClick={this.onToggleAllComplete}>
                            toggle all complete: {`${this.state.toggleAllComplete}`}
                        </button>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

