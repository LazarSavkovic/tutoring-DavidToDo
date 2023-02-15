import React, { useState } from 'react';
import './App.css';

function InputTodos(props) {
  const { todo, setTodo } = props;
  const [value, setValue] = useState('');
  // put input values into todolist
  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, { value: value, isChecked: false }]);
    setValue('');
  };

  // set input value
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="header">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="inputValue"
        />
        <button onClick={addTodo} className="buttonAdd">
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default InputTodos;
