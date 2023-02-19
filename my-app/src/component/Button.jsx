import React from "react";
import "./Button.css";

const Button = ({ text, setStatus, status, completed }) => {
  const statusHandler = (e) => {
    setStatus(text);
    // setStatus(e);
  };
  return (
    <div>
      <button
        onClick={statusHandler}
        // style={{ color, marginRight, marginLeft }}
        className="button"
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
