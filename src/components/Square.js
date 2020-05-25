import React from 'react'

function Square(props){
    return (
        <button className='button' onClick={props.onClick}><h1>{props.value}</h1></button>
    )
}
export default Square;
