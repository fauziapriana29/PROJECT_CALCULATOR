import React from 'react'
import './Button.css'

const Button = (props) => {
    
    const {type, title} = props

    return (
        <button className={type}>{title}</button>
    )
}

export default Button