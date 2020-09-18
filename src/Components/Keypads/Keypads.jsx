import React, { useState } from "react";
import "./keypads.css";
import Button from "../Button/Button.jsx";
import Input from '../Input/input.jsx'

const Keypads = () => {

  const [display, setDisplay] = useState({
    data: '',
    lastNumber: '',
    equalsNumber: false
  })

  const insert = (num) => {
    if (display.equalsNumber === false) {
      setDisplay({
        ...display, data: display.data += num,
        lastNumber: display.lastNumber += num
      })
      console.log("normal operation " +display.lastNumber)
    } else {
      clear()
      setDisplay({ data: display.data = num, equalsNumber: false })
      console.log('equals operation')
    }
  }

  const insertZero = (num) => {
    if (display.data !== '') {
      setDisplay({ data: display.data += num, lastNumber: display.lastNumber += num })
      console.log(display.lastNumber)
    }
  }

  const insertDecimal = (num) => {
    if (display.lastNumber.indexOf(".") === -1) {
      setDisplay({ data: display.data += num, lastNumber: display.lastNumber += num, equalsNumber: false })
      console.log(display.lastNumber)
    } else {
      alert('there can only be 1 decimal in 1 number formations')
    }
  }

  const insertOperation = (num) => {
    console.log(typeof display.lastNumber)
    let lastIndex = display.lastNumber.substr(display.lastNumber.length - 1, display.lastNumber.length)
    // console.log(lastIndex)
    if (display.lastNumber !== '' && lastIndex !== "+" && lastIndex !== '-' && lastIndex !== '*' && lastIndex !== '/' ) {
      setDisplay({
        ...display, data: display.data += num,
        lastNumber: '', 
        equalsNumber: false
      })
      console.log(display.lastNumber)
    }
  }

  const clear = () => {
   setDisplay({data: '', lastNumber: ''})
  }

  const erase = () => {
    setDisplay({
      data: display.data.substr(0, display.data.length - 1),
      lastNumber: display.lastNumber.substr(0, display.lastNumber.length - 1),
      equalsNumber: false
    })
    console.log(display.lastNumber)
  }

  const equal = () => {
    let equals = display.data = eval(display.data)
    let strNum = String(equals)
    setDisplay({...display, data: strNum, lastNumber: strNum, equalsNumber: true })
    console.log(typeof display.data)
  }




  return (
    <div className="container keypads">
      <Input title={display.data} />
      <br/>
      <div className="conButton">
        <Button type={"btn btn-danger clear ml-3"} title={"C"} click={() => clear()} />
        <Button type={"btn btn-danger clear ml-3"} title={"Back"} click={() => erase()} />
        
        <div className="numberic">
          <div className="upper-button">
            <Button type={"btn btn-secondary number ml-3"} value={7} title={7} click={() => insert("7")} />
            <Button type={"btn btn-secondary number ml-3"} value={8} title={8} click={() => insert("8")} />
            <Button type={"btn btn-secondary number ml-3"} value={9} title={9} click={() => insert("9")} />
            <Button type={"btn btn-success number ml-3"} title={"/"} click={() => insertOperation('/')} />
          </div>
          <div className="middle1-button">
            <Button type={"btn btn-secondary number ml-3"} value={4} title={4} click={() => insert("4")} />
            <Button type={"btn btn-secondary number ml-3"} value={5} title={5} click={() => insert("5")} />
            <Button type={"btn btn-secondary number ml-3"} value={6} title={6} click={() => insert("6")} />
            <Button type={"btn btn-success number ml-3"} title={"X"} click={() => insertOperation('*')} />
          </div>
          <div className="middle2-button">
            <Button type={"btn btn-secondary number ml-3"} value={1} title={1} click={() => insert("1")} />
            <Button type={"btn btn-secondary number ml-3"} value={2} title={2} click={() => insert("2")} />
            <Button type={"btn btn-secondary number ml-3"} value={3} title={3} click={() => insert("3")} />
            <Button type={"btn btn-success number ml-3"} title={"-"} click={() => insertOperation('-')} />
          </div>
          <div className="lower-button">
            <Button type={"btn btn-secondary number ml-3"} title={"."} click={() => insertDecimal('.')} />
            <Button type={"btn btn-secondary number ml-3"} title={"0"} click={() => insertZero("0")} />
            <Button type={"btn btn-warning number ml-3"} title={"="} click={() => equal()} />
            <Button type={"btn btn-success number ml-3"} title={"+"} click={() => insertOperation('+')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypads;
