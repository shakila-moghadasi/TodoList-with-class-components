import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    constructor(){
        super(); 
    }
  render() {
    return (
      <div>
          {this.props.todos.map((todo , index) => (<TodoItem text={todo}  index={index}  key={Math.floor(Math.random() * 1000)}  edit={this.props.edit}  delete={this.props.delete}/>))}
      </div>
    )
  }
}

