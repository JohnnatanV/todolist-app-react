/* eslint-disable react/prop-types */
export default function TodoInput(props) {
  const { handleTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        placeholder="Enter Todo..."
        required
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        disabled={todoValue.length < 1}
        onClick={() => {
          handleTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
