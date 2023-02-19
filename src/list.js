import React from 'react';
import './App.css';
import Todo from './todo.js';

// render function where i map over the Todo array to create list items in an unorder list
function ListTodos(props) {
  const { todos, setTodos, filterettodos } = props;

  // delete selcted value by index
  const deleteTodo = (id) => {
    console.log(id)
    console.log(todos)
    setTodos(todos.filter(todo => todo.id !== id))
  };

  // change the color after checkbox is checked
  const handleCheckboxClick = (index) => {
    const newTodo = [...todos];
    newTodo[index].isChecked = !newTodo[index].isChecked;
    setTodos(newTodo);
  };

  return (
    <div className="todolist">
      <ul>
        {filterettodos.map((item, index) => (
          <Todo
            todo={item}
            index={index}
            handleCheckboxClick={handleCheckboxClick}
            deleteTodo={deleteTodo}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListTodos;
