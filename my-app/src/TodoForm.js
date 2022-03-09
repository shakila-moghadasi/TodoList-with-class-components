import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Todoform extends Component {
  constructor(){
    super();
    this.state = {
      task : ""
    }
  }
  handlesubmit(e){
    e.preventDefault();
    this.props.submit(this.state.task)
  }
  render() {
    return (
      <div className='container'>
        <Form onSubmit={this.handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>TodoList</Form.Label>
            <Form.Control type="text" placeholder="Enter Todo" onChange={(e) => this.setState({task:e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
      </div>
    )
  }
}