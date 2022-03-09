import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div className='container'>
          <li key={this.props.key} value={this.props.value}>{this.props.text}</li>
          <button onClick={this.props.delete}>delete</button>
          <button onClick={this.props.edit}>Edit</button>
      </div>
    )
  }
}
