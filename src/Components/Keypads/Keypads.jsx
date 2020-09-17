import React from "react";
import "./keypads.css";
import Button from "../Button/Button.jsx";

const Keypads = () => {
  return (
    <div className="container keypads">
      <div className="conButton">
        <Button type={"btn btn-danger clear ml-3"} title={"C"} />
        <Button type={"btn btn-danger clear ml-3"} title={"Back"} />
        <br />
        <br />
        <Button type={"btn btn-secondary number ml-3"} title={7} />
        <Button type={"btn btn-secondary number ml-3"} title={8} />
        <Button type={"btn btn-secondary number ml-3"} title={9} />
        <Button type={"btn btn-success number ml-3"} title={"/"} />
        <br />
        <br />
        <Button type={"btn btn-secondary number ml-3"} title={4} />
        <Button type={"btn btn-secondary number ml-3"} title={5} />
        <Button type={"btn btn-secondary number ml-3"} title={6} />
        <Button type={"btn btn-success number ml-3"} title={"X"} />
        <br />
        <br />
        <Button type={"btn btn-secondary number ml-3"} title={1} />
        <Button type={"btn btn-secondary number ml-3"} title={2} />
        <Button type={"btn btn-secondary number ml-3"} title={3} />
        <Button type={"btn btn-success number ml-3"} title={"-"} />
        <br />
        <br />
        <Button type={"btn btn-secondary number ml-3"} title={"."} />
        <Button type={"btn btn-secondary number ml-3"} title={0} />
        <Button type={"btn btn-warning number ml-3"} title={"="} />
        <Button type={"btn btn-success number ml-3"} title={"+"} />
      </div>
    </div>
  );
};

export default Keypads;
