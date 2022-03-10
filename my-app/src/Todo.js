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
        this.removeTodo = this.removeTodo.bind(this)
    }
    addTodo(todo) {
        this.setState({ list: [...this.state.list, todo], value: '' })
    }
    removeTodo(todo){
      let list = this.state.list.filter(l => l !== todo);
      this.setState({ list: list })
    }
    editTodo(todo){
      let list = this.state.list.filter(l => l !== todo);
      this.setState({ list: list })
      this.setState({
        list: [...this.state.list, todo], value: ''
      })
    }
  render() {
    return (
      <div>
        <Todoform 
            add={this.addTodo}   edit = {this.editTodo}
        />
        <Todolist
            todos = {this.state.list}   delete = {this.removeTodo}   edit = {this.editTodo}
        />
      </div>
    )
  }
}