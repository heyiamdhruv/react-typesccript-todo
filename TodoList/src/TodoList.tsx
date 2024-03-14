import React, { useState } from "react";
import "./index.css";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Buy groceries for the week.", completed: false },
    { id: 2, text: "Call family to catch up.", completed: false },
  ]);

  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleAddClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  const handleClearClick = () => {
    setTodos([]);
  };
  return (
    <div className="main-container">
      <h1> Todo List </h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};
