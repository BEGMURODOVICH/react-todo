import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import TodoDoneItems from "./TodoDoneItems";
import { toast } from "react-toastify";
import { TODOS } from "./const";

export class Index extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem(TODOS)) || [
      {
        id: 0,
        title: "playing fotball",
        done: false,
      },
      {
        id: 1,
        title: "Reading books",
        done: false,
      },
      {
        id: 2,
        title: "Listening music",
        done: true,
      },
    ],
  };
  render() {
    let todos = [];
    const unDoneItems = this.state.todos.filter((todo) => !todo.done);
    const DoneItems = this.state.todos.filter((todo) => todo.done);

    const setTodos = () => {
      this.setState({ todos });
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };

    const getValue = (value) => {
      todos = [
        ...this.state.todos,
        { id: uuidv4(), title: value, done: false },
      ];

      if (value !== "") {
        setTodos();
        toast.success("Add successfully");
      } else {
        toast.error("Please fill this input");
      }
    };
    const doneTodo = (id) => {
      todos = this.state.todos.map((todo) => {
        todo.id === id && (todo.done = true);
        return todo;
      });
      setTodos();
    };
    const deleteTodo = (id) => {
      todos = this.state.todos.filter((todo) => todo.id !== id);
      setTodos();
      toast.error("Delete successfully");
    };
    return (
      <Container>
        <InputTodo getValue={getValue} />
        <Row>
          <Col lg={6}>
            {unDoneItems.map((todo) => (
              <TodoItem doneTodo={doneTodo} key={todo.id} {...todo} />
            ))}
          </Col>
          <Col lg={6}>
            {DoneItems.map((todo) => (
              <TodoDoneItems deleteTodo={deleteTodo} key={todo.id} {...todo} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;
