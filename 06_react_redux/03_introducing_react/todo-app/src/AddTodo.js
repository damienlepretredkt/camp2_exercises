import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';


function AddTodo (props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={props.value}
            placeholder="Enter todo name"
            onChange={props.handleChange}/>
        </FormGroup>
      </form>
    );
}


export default AddTodo
