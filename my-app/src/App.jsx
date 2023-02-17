import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./component/Form";
import Input from "./component/Input";
import Button from "./component/Button";
import Formlist from "./component/Formlist";
import imageone from "./images/imageone.jpg";

function App() {
  //useEffect

  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // runs ones upon refreshing
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  // const [todos, setTodos] = useState("");
  const filterHandler = () => {
    //   switch (status) {
    //     case "Completed":
    //       setFilteredTodos(todos.filter((todo) => todo.completed === true));
    //       break;
    //     case "Active":
    //       setFilteredTodos(todos.filter((todo) => todo.completed === false));
    //       break;
    //     default:
    //       setFilteredTodos(todos);
    //       break;
    //   }
    // };
    if (status === "Completed") {
      return setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === "Active") {
      return setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      return setFilteredTodos(todos);
    }
  };

  //save to locall
  const saveLocalTodos = () => {
    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {

    window.localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
    // }
  };

  //get from locall
  const getLocalTodos = () => {
    // try {
    //   // console.log(todos);
    //   if (localStorage.getItem("todos") === null) {
    //     return localStorage.setItem("todos", JSON.stringify([]));
    //   } else {
    //     // let todolocal = localStorage.getItem("todos", JSON.stringify(todos));
    //     let todolocal = JSON.parse(window.localStorage.getItem("todos"));
    //     return setTodos(todolocal);

    //     // console.log(todolocal);
    //     // console.log("todolocal");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return todos;
    // }

    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {
    //   let todolocal = localStorage.getItem("todos", JSON.stringify(todos));
    //   // let todolocal = JSON.parse(localStorage.getItem("todos"));
    //   setTodos(todolocal);
    //   console.log(todolocal);
    //   // console.log("todolocal");
    // }
    const data = window.localStorage.getItem("todos");
    // console.log(todos);

    console.log(data);
    if (data !== null) setTodos(JSON.parse(data));
  };
  return (
    <div class="App">
      <div class="imageonediv">
        <img src={imageone} alt="imageone" className="imageone" />
        {/* <img src="/images/imageonebig.jpg" alt="imageone" class="imageone" /> */}
        <div class="textdiv">
          <img src="/images/icon-sun.svg" alt="sunimage" className="sunimage" />
          <h2>TODO</h2>
          <div class="inputcomponenet">
            <Input
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
            />
          </div>
        </div>
      </div>
      <div class="formdiv">
        <Formlist
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />

        {/* <Form /> */}

        {/* {inputText} */}
      </div>

      <div class="buttondiv">
        <Button setStatus={setstatus} status={status} text="All" />
        <Button setStatus={setstatus} status={status} text="Active" />
        <Button setStatus={setstatus} status={status} text="Completed" />
      </div>
    </div>
  );
}

export default App;
