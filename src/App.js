import React, { useState } from 'react';
import './App.css';
import InputTodos from './input.js';
import ListTodos from './list.js';
import TodoCounter from './footer.js';
import ClearButton from './clearbutton.js';

function App() {
  // create usestates for todos
  const [todo, setTodo] = useState([]);

  // render all components i have in diffrent files
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <InputTodos todo={todo} setTodo={setTodo} />
        </div>
        <div className="containerMid">
          <ListTodos todo={todo} setTodo={setTodo} />
        </div>
        <div className="footer">
          <TodoCounter todo={todo} />
        </div>
        <div className="buttonCleardiv">
          <ClearButton todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
