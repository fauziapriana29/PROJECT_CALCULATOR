import React from "react";

const Input = () => {
  return (
    <div className="container mt-3">
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Input
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    </div>
  );
};

export default Input