import React, { useState } from 'react'
import './tictactoe.css'


export const Tictactoe = () => {

  const [turn, setTurn] = useState('x');
  const [cells, setcell] = useState(Array(9).fill(''));
  const [winner, setwinner] = useState()
  const winnerLogic = (squares) => {
    var combos = {
      leftRight: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      updown: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      cross: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    }

    for (let combo in combos) {
      combos[combo].forEach(pattern => {
        if (squares[pattern[0]] == '' || squares[pattern[1]] == '' || squares[pattern[2]] == '') {
          return
        } else if ((squares[pattern[0]] == squares[pattern[1]]) && (squares[pattern[1]] == squares[pattern[2]])) {
          // we got a winner
          setwinner(squares[pattern[0]])
          alert("Winner is " + squares[pattern[0]])
        } else {
          // mismatch we don't have any winner
        }
      });
    }

  }

  const clickevent = (num) => {

    if (cells[num] != '') {
      alert("Already Clicked")
      return
    } else {
      let squares = [...cells];
      if (turn == 'x') {
        squares[num] = 'x';
        setTurn('o')
      } else {
        squares[num] = 'o';
        setTurn('x');
      }

      winnerLogic(squares);
      setcell(squares);
    }

  }

  const resetGame = () => {
    setTurn('x')
    setcell(Array(9).fill(''))
    setwinner()
    return
  }

  const Cell = ({ num }) => {

    return <td className="cell" onClick={() => clickevent(num)}>{cells[num]}</td>
  }


  return (
    <div className="container">
      Turn : {turn}
      <table>
        <tr>
          <Cell num={0} />
          <Cell num={1} />
          <Cell num={2} />
        </tr>
        <tr>
          <Cell num={3} />
          <Cell num={4} />
          <Cell num={5} />
        </tr>
        <tr>
          <Cell num={6} />
          <Cell num={7} />
          <Cell num={8} />
        </tr>
      </table>
      {winner && (
        <>
          <p> {winner} is the winner</p>
          <button onclick={() => resetGame()} reset game> </button>
        </>
      )}
    </div>


  )
}

export default Tictactoe;


