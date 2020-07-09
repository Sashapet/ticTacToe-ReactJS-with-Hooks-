import React from 'react'
import Square from './Square.js'
import {useState} from 'react'
import calcWinner from '../helpers/calcWinner' // Calculating Winner

function Board(){
    //boardState
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    //Who's next state
    const [xIsNext, setXIsNext] = useState(true);
    //HANDLECLICK
    const handleClick = index => {
        const squares = [...boardSquares];
        // if someone won or click on the same square - return
        if (calcWinner(squares) || squares[index]) {
            return
        }
        // assign squares to x or o
        squares[index] = xIsNext ? "X" : "O";
        // acquire squares
        setBoardSquares(squares);
        // acquire who's next
        setXIsNext(!xIsNext);
    }
    //HANDLE CLICK
    //HANDLEAGAIN
    let squares_v2 = Array(9).fill(null);
    const handleAgain = () => {
        for (let i = 0; i < boardSquares.length; i++) {
            boardSquares[i] = null;
        }
        setBoardSquares(squares_v2);
        setXIsNext(true);
    }
    //HANDLEAGAIN
    //ASSIGNING winnerLines and winner
    let winnerData = calcWinner(boardSquares);
    let winnerLines = winnerData ? winnerData[1] : ''
    let winner = winnerData ? winnerData[0] : ''
    let status;
    status = winner ? `Winner is: ${winner}!` : `Player ${xIsNext ? "X":"O"} turn`;
    //checking if there is no null values in boardSquares array
    let drawDetector = true;
    for (let i = 0; i < boardSquares.length; i++) {
        if (boardSquares[i] === null) {
            drawDetector = false;
        }
    }
    const showSquare = (index) => {
        return <Square onClick={() => handleClick(index)} highlight={winnerLines && winnerLines.includes(index)} value={boardSquares[index]} />
    }
    return (
        <div className="board">
            <h1>{drawDetector && !winner ? "It's Draw!!" : status}</h1>
            <div className="eile">
                {showSquare(0)}
                {showSquare(1)}
                {showSquare(2)}
            </div>
            <div className="eile">
                {showSquare(3)}
                {showSquare(4)}
                {showSquare(5)}
            </div>
            <div className="eile">
                {showSquare(6)}
                {showSquare(7)}
                {showSquare(8)}
            </div>
            <button onClick = {() => handleAgain()}>Again</button>
        </div>
    )
}

export default Board
