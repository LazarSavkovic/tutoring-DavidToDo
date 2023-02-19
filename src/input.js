import React, { useState } from 'react';
import './App.css';
import './input.css';

// this is the component with the input bar and the add button
//Props are 'todo' passed from app.js

function InputTodos(props) {
  const { todos, setTodos } = props;
  const [value, setValue] = useState('');
  // put input values into todolist
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { value: value, isChecked: false, id: Math.floor(Math.random() * 10000) },
    ]);
    setValue('');
  };

  // set input value
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={addTodo}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="inputValue"
        />
        <button type='submit' className="buttonAdd">
          Add Todo
        </button>
        </form>
      </div>
    </div>
  );
}

export default InputTodos;
