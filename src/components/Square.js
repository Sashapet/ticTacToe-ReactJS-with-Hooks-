import React from 'react'

function Square(props){
    const className = "square" + (props.highlight ? "highlight" : "")
    return (
        <button className={className} onClick={props.onClick}><h1>{props.value}</h1></button>
    )
}
export default Square;
