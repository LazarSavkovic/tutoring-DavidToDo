import './App.css';

function ClearButton(props) {
  const { setTodo } = props;
  const clearAll = () => {
    setTodo([]);
  };
  return (
    <button onClick={clearAll} className="buttonClear">
      clear all
    </button>
  );
}

export default ClearButton;
