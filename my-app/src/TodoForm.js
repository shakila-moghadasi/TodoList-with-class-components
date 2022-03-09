import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Todoform extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
    this.handlesubmit = this.handlesubmit.bind(this)
  }
  handlesubmit(e){
    e.preventDefault();
    this.props.add(this.state.value)
  }
  render() {
    return (
      <div className='container'>
        <Form onSubmit={this.handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>TodoList</Form.Label>
            <Form.Control type="text" placeholder="Enter Todo"  onChange={(e) => this.setState({ value: e.target.value })}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
      </div>
    )
  }
}