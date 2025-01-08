import React, { Component } from "react";

export class TodoDoneItems extends Component {
  render() {
    const { id, title, deleteTodo } = this.props;

    return (
      <div className="border mb-3 p-3 d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDoneItems;
