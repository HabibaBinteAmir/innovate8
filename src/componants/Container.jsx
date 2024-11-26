import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1250px] m-auto ${className}`}>{children}</div>
  )
}

export default Container