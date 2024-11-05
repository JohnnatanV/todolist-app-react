import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoCard = (props) => {
  const [toggle, setToggle] = useState(false);

  const { children, handleEditTodo, handleDeleteTodo, index } = props;

  const handleCheckTodo = () => {
    setToggle(!toggle);
  };

  return (
    <li className="todoItem">
      <p className={toggle ? "check" : ""}>{children}</p>
      <div className="actionsContainer">
        <button onClick={handleCheckTodo}>
          {!toggle ? (
            <i className="fa-regular fa-square"></i>
          ) : (
            <i className="fa-solid fa-square-check"></i>
          )}
        </button>
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
