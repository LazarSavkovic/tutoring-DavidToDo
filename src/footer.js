import React, { useEffect, useState } from 'react';
import ClearButton from './clearbutton';

import './App.css';

function counttodos(todoList) {
  return {
    completed: (todoList.filter(todo => todo.isChecked)).length,
    notCompleted: (todoList.filter(todo => !todo.isChecked)).length,
  };
}

// use effect to show whenever the array will change from completed todos to not completed
function TodoCounter(props) {
  const { todos, setTodos, status, setStatus } = props;
  const [completed, setCompleted] = useState(0);
  const [notCompleted, setNotCompleted] = useState(0);

  // filter between completed todos and not completed todos with cheackking the bolean status

  //with the useeffect hook set the todos on completed or not completed if sth changes on the todos
  useEffect(() => {
    const { completed, notCompleted } = counttodos(todos);
    setCompleted(completed);
    setNotCompleted(notCompleted);
  }, [todos]);

  function changeStatus(string) {
    setStatus(string);
  }
  // return all the todos as completed or not completed
  // create buttons to set the status of the todos wich shoudl be showed
  return (
    <div className='TodoCounter'>
      <div className='CounterDisplay'>
        <p>Completed: {completed}</p>
        <p>Not Completed: {notCompleted}</p>
        <p>Todos: {todos.length} </p>
      </div>
      <div className='CounterBtns'>
        <div>
          <button disabled={status === 'All'} onClick={() => changeStatus('All')}>
            All
          </button>
          <button
            disabled={status == 'Active'}
            onClick={() => changeStatus('Active')}
          >
            Active
          </button>
          <button
            disabled={status == 'Completed'}
            onClick={() => changeStatus('Completed')}
          >
            Completed
          </button></div>
        <ClearButton todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoCounter;
