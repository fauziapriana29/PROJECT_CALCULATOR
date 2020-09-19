import React from "react";
import "./input.css";

const Input = (props) => {
  const {title, className} = props
  return (
    <div className="container mt-3 inputCont">
      <div className={className}>{title}</div>
    </div>
  );
};

export default Input;
