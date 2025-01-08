import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { id, title, doneTodo } = this.props;
    return (
      <div className="border mb-3 p-3 d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <button onClick={() => doneTodo(id)} className="btn btn-success">
          Done
        </button>
      </div>
    );
  }
}

export default TodoItem;
