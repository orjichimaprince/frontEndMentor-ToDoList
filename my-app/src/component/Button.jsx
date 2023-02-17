import React from "react";
import "./Button.css";

// import favicon from "../../public/favicon"

const Button = ({ text, setStatus, status, completed }) => {
  const statusHandler = (e) => {
    // console.log(e);
    setStatus(text);
    // setStatus(e);
  };
  return (
    <div>
      {/* <Button className="button">{text}</Button> */}
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
