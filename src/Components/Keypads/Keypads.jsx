import React from "react";
import "./keypads.css";
import Button from "../Button/Button.jsx";

const Keypads = () => {

  const insert = (num) => {
    document.getElementById('input').value += num
  }
  const clear = () => {
    document.getElementById('input').value = ''
  }
  const erase = () => {
    let display = document.getElementById('input')
    display.value = display.value.substr(0, display.value.length-1)
  }
  const equal = () => {
    let display = document.getElementById('input')
    display.value = eval(display.value)
  }




  return (
    <div className="container keypads">
      <div className="conButton">
        <Button type={"btn btn-danger clear ml-3"} title={"C"} click={() => clear()} />
        <Button type={"btn btn-danger clear ml-3"} title={"Back"} click={() => erase()} />
        
        <div className="numberic">
          <div className="upper-button">
            <Button type={"btn btn-secondary number ml-3"} value={7} title={7} click={() => insert(7)} />
            <Button type={"btn btn-secondary number ml-3"} value={8} title={8} click={() => insert(8)} />
            <Button type={"btn btn-secondary number ml-3"} value={9} title={9} click={() => insert(9)} />
            <Button type={"btn btn-success number ml-3"} title={"/"} click={() => insert('/')} />
          </div>
          <div className="middle1-button">
            <Button type={"btn btn-secondary number ml-3"} value={4} title={4} click={() => insert(4)} />
            <Button type={"btn btn-secondary number ml-3"} value={5} title={5} click={() => insert(5)} />
            <Button type={"btn btn-secondary number ml-3"} value={6} title={6} click={() => insert(6)} />
            <Button type={"btn btn-success number ml-3"} title={"X"} click={() => insert('*')} />
          </div>
          <div className="middle2-button">
            <Button type={"btn btn-secondary number ml-3"} value={1} title={1} click={() => insert(1)} />
            <Button type={"btn btn-secondary number ml-3"} value={2} title={2} click={() => insert(2)} />
            <Button type={"btn btn-secondary number ml-3"} value={3} title={3} click={() => insert(3)} />
            <Button type={"btn btn-success number ml-3"} title={"-"} click={() => insert('-')} />
          </div>
          <div className="lower-button">
            <Button type={"btn btn-secondary number ml-3"} title={"."} click={() => insert('.')} />
            <Button type={"btn btn-secondary number ml-3"} title={0} click={() => insert(0)} />
            <Button type={"btn btn-warning number ml-3"} title={"="} click={() => equal()} />
            <Button type={"btn btn-success number ml-3"} title={"+"} click={() => insert('+')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypads;
