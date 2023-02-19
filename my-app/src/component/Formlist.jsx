import React from "react";
import Form from "./Form";
// import Input from "./Input";
import "./Formlist.css";

const Formlist = ({ todos, setTodos, filteredTodos, setFilteredTodos }) => {
  return (
    <div>
      <div className="formListclass">
        <ul>
          {/* {Object.values(todos).map((todo) => ( */}
          {filteredTodos.sort().map((todo) => (
            <Form
              key={todo.id}
              text={todo.text}
              todos={todos}
              todo={todos}
              setTodos={setTodos}
              id={todo.id}
              completed={todo.completed}
            />
          ))}
          {/* {Object.keys(todos).map((todo) => (
            <Form Key={todo.id} todos={todos} />
          ))} */}
        </ul>
      </div>
    </div>
  );
};
export default Formlist;
