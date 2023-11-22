import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constans'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
function App () {
  const [board, setBoard] = useState(() => {
    const boardFronStorage = window.localStorage.getItem('board')
    return boardFronStorage ? JSON.parse(boardFronStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFronStorage = window.localStorage.getItem('turn')
    return turnFronStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
   <main className="board">
    <h1 className='mb-4 text-3xl'>Tic tac toe</h1>
    <button onClick={resetGame}>ResetGame</button>
    <section className="game ">
      {
          board.map((square, index) => {
            return (
           <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
           >
             {square}

           </Square>

            )
          })
      }

    </section>
    <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

    </section>
    <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
   </main>
  )
}

export default App
