import React, { Component, createRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export class InputTodo extends Component {
  inputRef = createRef();
  render() {
    const sumbit = (e) => {
      e.preventDefault();
      this.props.getValue(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };
    return (
      <Form onSubmit={sumbit}>
        <InputGroup className="w-50 m-auto my-3">
          <Form.Control
            ref={this.inputRef}
            placeholder="Writting todo name"
            aria-label="Writting todo name"
          />
          <Button type="submit" variant="outline-success">
            Save
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default InputTodo;
