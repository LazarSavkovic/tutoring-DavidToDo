import React, { useEffect, useState } from 'react';

import './App.css';

function counttodos(todo) {
  return {
    completed: todo.filter((todo) => todo.isChecked).length,
    notCompleted: todo.filter((todo) => !todo.isChecked).length,
  };
}

// use effect to show whenever the array will change from completed todos to not completed
function TodoCounter(props) {
  const { todo } = props;
  const [completed, setCompleted] = useState(0);
  const [notCompleted, setNotCompleted] = useState(0);

  // filter between completed todos and not completed todos with cheackking the bolean status

  //with the useeffect hook set the todos on completed or not completed if sth changes on the todos
  useEffect(() => {
    const { completed, notCompleted } = counttodos(todo);
    setCompleted(completed);
    setNotCompleted(notCompleted);
  }, [todo]);

  return (
    <div>
      <p>Completed: {completed}</p>
      <p>Not Completed: {notCompleted}</p>
      <p>Todos: {todo.length} </p>
    </div>
  );
}

export default TodoCounter;
