import React from "react";
import "./input.css";

const Input = (props) => {
  const {title} = props
  return (
    <div className="container mt-3 inputCont">
      <div className="input" id="input">{title}</div>
    </div>
  );
};

export default Input;
