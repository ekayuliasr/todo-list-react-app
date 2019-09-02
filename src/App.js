import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import TodoList from './TodoList.js';

class App extends Component {
  render(){
    return (
	    <div className="container">
	    	<Header />
		  	<TodoList />        		
        </div>
    );
  }
}

export default App;
