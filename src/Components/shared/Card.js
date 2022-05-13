import React from 'react'

function Card(props) {
  return (
    <div className={`card ${props.reverse && 'reverse'}`}>{props.children}</div>
  )
}

export default Card