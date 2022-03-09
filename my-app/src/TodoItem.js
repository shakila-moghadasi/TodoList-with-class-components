import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(){
        super();
        this.state = {
            text : this.props.text ,
            index : this.props.index ,
            key : this.props.key
        }
    }
  render() {
    return (
      <div>
          <input value={this.props.value}></input>
          <button onClick={this.props.delete}>delete</button>
          <button onClick={this.props.edit}>Edit</button>
      </div>
    )
  }
}
