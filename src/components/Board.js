import React from 'react'
import Square from './Square.js'
import {useState} from 'react'

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
    //HANDLEAGAIN
    let squares_v2 = Array(9).fill(null);
    const handleAgain = () => {
        for (let i = 0; i < boardSquares.length; i++) {
            boardSquares[i] = null;
        }
        setBoardSquares(squares_v2);
        setXIsNext(true);
    }
    // creating square, and passing data through props
    const showSquare = (index) => {
        return <Square onClick={() => handleClick(index)} color="no" value={boardSquares[index]}/>
    }
    // assigning winnerSign to winner variable
    const winner = calcWinner(boardSquares);
    let status;
    status = winner ? `Winner is: ${winner}!` : `Player ${xIsNext ? "X":"O"} turn`;
    //checking if there is no null values in boardSquares array
    let drawDetector = true;
    for (let i = 0; i < boardSquares.length; i++) {
        if (boardSquares[i] === null) {
            drawDetector = false;
        }
    }
    return (
        <div className="board">
            <h1>{drawDetector && !winner ? "It's Draw!!" : status}</h1>
            <div className="eile">
                <div>{showSquare(0)}</div>
                <div>{showSquare(1)}</div>
                <div>{showSquare(2)}</div>
            </div>
            <div className="eile">
                <div>{showSquare(3)}</div>
                <div>{showSquare(4)}</div>
                <div>{showSquare(5)}</div>
            </div>
            <div className="eile">
                <div>{showSquare(6)}</div>
                <div>{showSquare(7)}</div>
                <div>{showSquare(8)}</div>
            </div>
            <button onClick = {() => handleAgain()}>Again</button>
        </div>
    )
}
//WINNING COMBINATIONS
function calcWinner(squares){
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
}
export default Board
