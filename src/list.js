import React from 'react';
import './App.css';

// render function where i map over the Todo array to create list items in an unorder list
function ListTodos(props) {
  const { todo, setTodo } = props;

  // delete selcted value by index
  const deleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  // change the color after checkbox is checked
  const handleCheckboxClick = (index) => {
    const newTodo = [...todo];
    newTodo[index].isChecked = !newTodo[index].isChecked;
    setTodo(newTodo);
  };
  return (
    <div className="containerMid">
      <ul>
        {todo.map((item, index) => (
          <li
            key={item + index}
            style={{
              color: item.isChecked ? 'red' : 'white',
              textDecoration: item.isChecked ? 'line-through' : 'none',
            }}
            className="todo"
          >
            <input
              type="checkbox"
              onClick={() => handleCheckboxClick(index)}
              defaultChecked={item.isChecked}
            />
            {item.value}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodos;
