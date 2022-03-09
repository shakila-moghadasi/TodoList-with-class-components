import React, { Component } from 'react';
import Todolist from './TodoList';
import Todoform from './TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'TODO',
            list: [],
        }
        this.addTodo = this.addTodo.bind(this)
    }
    addTodo(todo) {
        this.setState({ list: [...this.state.list, todo], value: '' })
    }
    removeTodo(todo){
      let list = this.state.list.filter(l => l !== todo);
      this.setState({ list: list })
    }
    editTodo(){
        
    }
  render() {
    return (
      <div>
        <Todoform 
            submit={this.addTodo}
        />
        <Todolist
            todos = {this.state.list}  delete = {this.removeTodo}   edit = {this.editTodo}
        />
      </div>
    )
  }
}