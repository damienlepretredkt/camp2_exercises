import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

function ZipCodeForm(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <TextField
        id="name"
        label="Zipcode"
        value={props.zipcode}
        onChange={props.handleChange}
        margin="normal"
      />
      <Button type="submit" raised color="primary">Submit</Button>
    </form>
  );

}

export default ZipCodeForm
