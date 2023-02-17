import React, { useState } from 'react';
import './todo.css';
import { BiCheck } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { BiSave } from 'react-icons/bi';

// set one use State to signify if we are editing

function Todo(props) {
  const { deleteTodo, handleCheckboxClick, todos, index, todo, setTodos } =
    props;
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(todo.value);

  function toggleInput() {
    setEditing(!editing);
  }

  function saveValue() {
    const filteredtodos = todos.filter((item) => {
      if (item.id !== todo.id) {
        return item;
      }
    });
    console.log(filteredtodos);
  }

  return (
    <li className="todo">
      {!editing ? (
        <span
          style={{
            color: todo.isChecked ? 'red' : 'white',
            textDecoration: todo.isChecked ? 'line-through' : 'none',
          }}
        >
          {todo.value}
        </span>
      ) : (
        <form>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
          <button onClick={() => saveValue()}>
            <BiSave />
          </button>
        </form>
      )}

      <button onClick={() => deleteTodo(index)}>
        <BiTrash />
      </button>
      <button onClick={() => handleCheckboxClick(index)}>
        <BiCheck />
      </button>
      <button onClick={() => toggleInput()}>
        <BiPencil />
      </button>
    </li>
  );
}

export default Todo;
