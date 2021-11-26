import React from "react";

const Form = ({
  inputText,
  setInputText,
  todoItem,
  setTodoItem,
  isCompleted,
  setIsCompleted,
}) => {
  const inputEventHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    setTodoItem([
      ...todoItem,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const completedChecker = (e) => {
    setIsCompleted(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={inputEventHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitEventHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onClick={completedChecker}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
