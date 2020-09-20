import React, { useState } from "react";
import "./keypads.css";
import Button from "../Button/Button.jsx";
import Input from '../Input/input.jsx'

const Keypads = () => {

  const [display, setDisplay] = useState({
    data: '0',
    lastNumber: '',
    equalsNumber: false
  })
  const insert = (num) => {
  
    if (num > 0 && num <= 9) {
      if (display.equalsNumber === false && display.data != 0) {
        console.log(display.equalsNumber)
        setDisplay({
          ...display,
          data: display.data += num,
          lastNumber: display.lastNumber += num
        })
      } else if (display.data == 0 || display.equalsNumber === true) {
        console.log(display.equalsNumber)
        // let clearNum = display.data = ''
        setDisplay({
          data:  num, equalsNumber: false
        })
      }
    } else if (num == 0) {
      if (display.data !== '') {
        setDisplay({
          ...display, data: display.data += num, lastNumber: display.lastNumber += num
        })
      }
    } else if (num == '.') {
      if (display.lastNumber.indexOf('.') === -1) {
        setDisplay({
          ...display, data: display.data += num, lastNumber: display.lastNumber += num
        })
      }
    } else if (num == '+' || num == '-' || num == '*' || num == '/') {
      let lastIndex = display.data.substr(display.data.length - 1, display.data.length)
      if (display.data != '' && display.lastNumber != '' && lastIndex != '+' && lastIndex != '-' && lastIndex != '*' && lastIndex != '/') {
        setDisplay({...display, data: display.data += num, lastNumber: '' , equalsNumber: false})
      } else if (lastIndex != num && display.data) {
        let newoperation = lastIndex.replace(lastIndex, num)
        let newData = display.data.substr(0, display.data.length-1)
        setDisplay({...display,data: newData += newoperation})
      }
    } else if (num == '=') {
      let lastIndex = display.data.substr(display.data.length - 1, display.data.length)
      if (lastIndex !== "+" && lastIndex !== "-" && lastIndex !== "*" && lastIndex !== "/") {
        let equals = display.data = eval(display.data)
        let strNum = String(equals)
        setDisplay({ data: strNum, lastNumber: strNum, equalsNumber: true })
      } else if (lastIndex == "+" || lastIndex == "-" || lastIndex == "*" || lastIndex == "/") {
        let newData = display.data.substr(0, display.data.length - 1)
        let equals = eval(newData)
        let strEquals = String(equals)
        setDisplay({data: strEquals, lastNumber: display.data, equalsNumber: true })
      }
    } else if (num == 'clear') {
      setDisplay({data: '0', lastNumber: '', equalsNumber: false})
    } else if (num == 'erase') {
      setDisplay({
        data: display.data.substr(0, display.data.length - 1),
        lastNumber: display.lastNumber.substr(0, display.lastNumber.length - 1),
        equalsNumber: false
      })
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
    } else {
      return 'input'
    }
    }
  

  return (
    <div className="container keypads">
      <Input title={display.data} className={toggleclass()}/>
      <br/>
      <div className="conButton">
        <div className="conClear">
          <Button type={"btn btn-danger clear"} title={"AC"} click={() => insert('clear')} />
          <Button type={"btn btn-danger clear"} title={<i class="fas fa-backspace"></i>} click={() => insert('erase')} />
        </div>
        
        <div className="numberic">
          <div className="upper-button">
            <Button type={"btn btn-secondary number"} value={7} title={7} click={() => insert("7")} />
            <Button type={"btn btn-secondary number"} value={8} title={8} click={() => insert("8")} />
            <Button type={"btn btn-secondary number"} value={9} title={9} click={() => insert("9")} />
            <Button type={"btn btn-success number"} title={"/"} click={() => insert('/')} />
          </div>
          <div className="middle1-button">
            <Button type={"btn btn-secondary number"} value={4} title={4} click={() => insert("4")} />
            <Button type={"btn btn-secondary number"} value={5} title={5} click={() => insert("5")} />
            <Button type={"btn btn-secondary number"} value={6} title={6} click={() => insert("6")} />
            <Button type={"btn btn-success number"} title={"X"} click={() => insert('*')} />
          </div>
          <div className="middle2-button">
            <Button type={"btn btn-secondary number"} value={1} title={1} click={() => insert("1")} />
            <Button type={"btn btn-secondary number"} value={2} title={2} click={() => insert("2")} />
            <Button type={"btn btn-secondary number"} value={3} title={3} click={() => insert("3")} />
            <Button type={"btn btn-success number"} title={"-"} click={() => insert('-')} />
          </div>
          <div className="lower-button">
            <Button type={"btn btn-secondary number"} title={"."} click={() => insert('.')} />
            <Button type={"btn btn-secondary number"} title={"0"} click={() => insert("0")} />
            <Button type={"btn btn-warning number"} title={"="} click={() => insert('=')} />
            <Button type={"btn btn-success number"} title={"+"} click={() => insert('+')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypads;
