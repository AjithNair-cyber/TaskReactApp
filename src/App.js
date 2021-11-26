import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [isCompleted, setIsCompleted] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  const filterHandler = () => {
    switch (isCompleted) {
      case "completed":
        setFilteredTodo(todoItem.filter((todo) => todo.completed === true));
        console.log("AAA");
        break;
      case "uncompleted":
        setFilteredTodo(todoItem.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodo(todoItem);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
  };

  const getItemLocal = () => {
    if (localStorage.getItem("todoItem" === null)) {
      localStorage.setItem("todoItem", JSON.stringify([]));
    } else {
      let items = JSON.parse(localStorage.getItem("todoItem"));
      console.log(items);
      setTodoItem(items);
    }
  };

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [isCompleted, todoItem]);

  useEffect(() => {
    getItemLocal();
  }, []);
  return (
    <div className="App">
      <header>Task Master</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
      <TodoList
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        filteredTodo={filteredTodo}
      />
    </div>
  );
}

export default App;
