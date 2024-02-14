import React from 'react'
import ColorCard from './ColorCard'

export default function ColorContainer() {
    const ColorValues = [
        { title:"React" , color:"green"},
        { title:"JS" , color:"yellow"},
        { title:"Redux" , color:"red"},
        { title:"HTML5" , color:"blue"}
    ]
    return (
        <div>
            {/* <ColorCard title="React" color="green" />
            <ColorCard title="Js" color="yellow" />
            <ColorCard title="Html5" color="blue" /> */}
            {
                ColorValues.map((obj) =>
                  <ColorCard title={obj.title} color={obj.color}/>
                )
            }
        </div>
    )
}
