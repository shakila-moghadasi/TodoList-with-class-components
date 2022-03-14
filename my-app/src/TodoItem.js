import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FcEmptyTrash , FcProcess } from 'react-icons/fc';

export default class TodoItem extends Component {
    constructor(){
        super();
        this.state = {
          value : "",
          disable : true
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
      this.setState({
        disable : true,
      })
      if(this.state.disable){
        this.setState({disable:false})
      }
      else{
        this.setState({disable:true})
        this.props.edit(this.state.key , this.state.text)
      }
    }
  render() {
    return (
      <div className='container row mt-5'>
          <li className='col-10 border border-primary bg-info' value={this.props.value}>{this.props.text}</li>
          <Button className='col-1' variant="danger" onClick={this.handledelete}><FcEmptyTrash/></Button>
          <Button className='col-1' variant="secondary" onClick={this.handleedit}><FcProcess/></Button>
      </div>
    )
  }
}
