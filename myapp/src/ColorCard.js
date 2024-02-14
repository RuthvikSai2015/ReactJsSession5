import React from 'react'
import './ColorCard.css'
export default function ColorCard(props) {
  return (
    <div className="color-box" style={{backgroundColor:props.color,fontSize:'50px'}}>
       {props.title}
    </div>
  )
}
