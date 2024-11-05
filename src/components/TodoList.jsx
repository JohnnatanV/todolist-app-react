/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIdx) => (
        <TodoCard key={todoIdx} {...props} index={todoIdx}>
          {todo}
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
