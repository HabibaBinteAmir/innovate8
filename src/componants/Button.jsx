import React from 'react'

const Button = ({className,btntext}) => {
  return (
    <button className={`${className}`}>{btntext}</button>
  )
}

export default Button