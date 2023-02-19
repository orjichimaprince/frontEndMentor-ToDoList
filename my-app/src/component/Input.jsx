import React from "react";
import "./Input.css";

function Input({ setInputText, setTodos, todos, inputText }) {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <div className="forms">
      <div className="circles">
        <img
          src="/images/icon-check.svg"
          alt="imagecheck"
          className="circleimage"
          onClick={submitHandler}
          onSubmit={submitHandler}
        ></img>
      </div>
      <input type="text" onChange={inputTextHandler} value={inputText} />
    </div>
  );
}

export default Input;
