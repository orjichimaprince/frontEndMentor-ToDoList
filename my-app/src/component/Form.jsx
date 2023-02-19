import React from "react";
import "./Form.css";
import Formlist from "./Formlist";
const Form = ({ id, text, setTodos, todo, todos, completed }) => {
  const deleteHandler = (num) => {
    setTodos(todos.filter((el) => el.id !== num));
  };
  const completeHandler = (nums) => {
    setTodos(
      todos.map((item) => {
        if (item.id === nums) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <form className="inputer">
        <div className="wrapper">
          <label>
            <div className="circle">
              <img
                src="/images/icon-check.svg"
                alt="imagecheck"
                onClick={() => completeHandler(id)}
                onSubmit={() => completeHandler(id)}
              />
            </div>
            <div className={`todolistdiv ${completed ? "completed" : ""}`}>
              {text}
            </div>
            <img
              src="/images/close_FILL0_wght200_GRAD-25_opsz20.svg"
              alt="iconcross"
              className="iconcross"
              onClick={() => deleteHandler(id)}
              onSubmit={() => deleteHandler(id)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
