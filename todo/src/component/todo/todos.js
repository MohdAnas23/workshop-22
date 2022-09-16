import React from "react";
import TodoItem from "./todoItem";

export default function todos(props) {
  return (
    <div className="container">
      <div>
        <h1 className="text-center">Todo list</h1>
      </div>
      {props.todos.length > 0
        ? props.todos.map((todo, key) => {
            return (
              <TodoItem todos={todo} key={key} onDelete={props.onDelete} />
            );
          })
        : "no item to display"}
    </div>
  );
}
