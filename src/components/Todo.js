import React from "react";

const Todo = ({ todoText, setTodoItem, todo, todoItem }) => {
  const deleteHandler = () => {
    console.log(todo);
    setTodoItem(todoItem.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodoItem(
      todoItem.map((el) => {
        if (el.id === todo.id)
          return {
            ...el,
            completed: !el.completed,
          };
          return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {todoText}</li>
      <button className="complete-btn" onClick={completedHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
