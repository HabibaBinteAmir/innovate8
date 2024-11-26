import React from 'react'

const Heading = ({text,className}) => {
    let amin=text.replace("#","<span class='one'>").replace("#","</span>");
  return (
    <h1 dangerouslySetInnerHTML={{__html:amin}} className={`${className}`}></h1>
  )
}

export default Heading