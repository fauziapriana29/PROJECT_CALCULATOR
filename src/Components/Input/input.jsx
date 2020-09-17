import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="container mt-3 inputCont">
      <input
        type="text"
        className="input"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
};

export default Input;
