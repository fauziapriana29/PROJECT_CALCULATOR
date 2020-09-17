import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="container mt-3 inputCont">
      <input
      name="display"
        type="text"
        id='input'
        className="input"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
};

export default Input;
