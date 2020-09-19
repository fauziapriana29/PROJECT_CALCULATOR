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
      setDisplay({ data: display.data + num, lastNumber: display.lastNumber += num, equalsNumber: false })
      console.log(display.lastNumber)
    } else {
      alert('there can only add 1 decimal in 1 number formations')
    }
  }

  const insertOperation = (num) => {
    console.log(typeof display.lastNumber)
    let lastIndex = display.lastNumber.substr(display.lastNumber.length - 1, display.lastNumber.length)
    let lastOperation = display.data.substr(display.data.length - 1, display.data.length)
    // console.log(lastIndex)
    if (display.lastNumber !== '' && lastIndex !== "+" && lastIndex !== '-' && lastIndex !== '*' && lastIndex !== '/' ) {
      setDisplay({
        ...display, data: display.data += num,
        lastNumber: '', 
        equalsNumber: false
      })
      console.log(display.lastNumber)
    } else if (lastOperation !== num) {
      let newoperation = display.data.replace(lastOperation, num)
      setDisplay({...display,data: newoperation})
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
    let lastIndex = display.data.substr(display.data.length - 1, display.data.length)
    if (lastIndex !== "+" && lastIndex !== "-" && lastIndex !== "*" && lastIndex !== "/") {
      let equals = display.data = eval(display.data)
      let strNum = String(equals)
      setDisplay({...display, data: strNum, lastNumber: strNum, equalsNumber: true })
      console.log(typeof display.data)
    } else {
      alert('Wrong input')
    }
  }

  const toggleclass = () => {
    let length = display.data.length;
    if (length >= 18) {
      return 'step3'
    }else if (length >= 13) {
      return 'step2'
    } else if (length < 13) {
      return 'input'
    }
    }
  




  return (
    <div className="container keypads">
      <Input title={display.data} className={toggleclass()}/>
      <br/>
      <div className="conButton">
        <div className="conClear">
          <Button type={"btn btn-danger clear"} title={"AC"} click={() => clear()} />
          <Button type={"btn btn-danger clear"} title={<i class="fas fa-backspace"></i>} click={() => erase()} />
        </div>
        
        <div className="numberic">
          <div className="upper-button">
            <Button type={"btn btn-secondary number"} value={7} title={7} click={() => insert("7")} />
            <Button type={"btn btn-secondary number"} value={8} title={8} click={() => insert("8")} />
            <Button type={"btn btn-secondary number"} value={9} title={9} click={() => insert("9")} />
            <Button type={"btn btn-success number"} title={"/"} click={() => insertOperation('/')} />
          </div>
          <div className="middle1-button">
            <Button type={"btn btn-secondary number"} value={4} title={4} click={() => insert("4")} />
            <Button type={"btn btn-secondary number"} value={5} title={5} click={() => insert("5")} />
            <Button type={"btn btn-secondary number"} value={6} title={6} click={() => insert("6")} />
            <Button type={"btn btn-success number"} title={"X"} click={() => insertOperation('*')} />
          </div>
          <div className="middle2-button">
            <Button type={"btn btn-secondary number"} value={1} title={1} click={() => insert("1")} />
            <Button type={"btn btn-secondary number"} value={2} title={2} click={() => insert("2")} />
            <Button type={"btn btn-secondary number"} value={3} title={3} click={() => insert("3")} />
            <Button type={"btn btn-success number"} title={"-"} click={() => insertOperation('-')} />
          </div>
          <div className="lower-button">
            <Button type={"btn btn-secondary number"} title={"."} click={() => insertDecimal('.')} />
            <Button type={"btn btn-secondary number"} title={"0"} click={() => insertZero("0")} />
            <Button type={"btn btn-warning number"} title={"="} click={() => equal()} />
            <Button type={"btn btn-success number"} title={"+"} click={() => insertOperation('+')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypads;
