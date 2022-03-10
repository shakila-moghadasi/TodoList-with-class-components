import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(){
        super();
        this.state = {
          value : ""
        }
        this.handledelete = this.handledelete.bind(this)
        this.handleedit = this.handleedit.bind(this)
    }
    handledelete(e){
      e.preventDefault();
      this.props.delete(this.props.text)
    }
    handleedit(e){
      e.preventDefault();
      this.props.edit(this.props.text)
    }
  render() {
    return (
      <div className='container'>
          <li value={this.props.value}>{this.props.text}
          <button onClick={this.handledelete}>delete</button>
          <button onClick={this.handleedit}>Edit</button>
          </li>
      </div>
    )
  }
}
