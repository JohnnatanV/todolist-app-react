import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const recoverData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleTodos = (newTodo) => {
    let newTodos = [...todos, newTodo];
    recoverData(newTodos);
    setTodos(newTodos);
  };
  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    recoverData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const editedValue = todos[index];
    setTodoValue(editedValue);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleTodos={handleTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
};

export default App;
