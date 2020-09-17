import React from 'react'
import './Button.css'

const Button = (props) => {
    
    const {type, title, click, value} = props

    return (
        <button className={type} value={value} onClick={click}>{title}</button>
    )
}

export default Button