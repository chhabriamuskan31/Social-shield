import React from "react";
import { useState } from "react";
import TodoForm from "./Todoform.js";
import TodoItem from "./TodoItem.js";
import "./Prediction.css";

export default function Prediction() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="todo-app">
        <h1>Write Comments</h1>
        <TodoForm addTodo={addTodo} />
        <hr className="seperator" />
        {todos.map((todo) => {
          return (
            <TodoItem
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              importantTodo={importantTodo}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
      {/* <div className="commentArea"></div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
      <button onClick={handleClick}>Click Me</button> */}
    </>
  );
}
