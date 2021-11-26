import React from "react";
import Todo from "./Todo"

const TodoList = ({todoItem, setTodoItem, filteredTodo}) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
          {filteredTodo.map((todo)=>(
              <Todo key={todo.id} todoText = {todo.text} setTodoItem={setTodoItem} todo={todo} todoItem={todoItem} />
          ))}
        </ul>
      </div>
    );
}

export default TodoList;