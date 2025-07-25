import { useState } from 'react'
import GameBoard from './components/GameBoard.jsx'
import Player from './components/Player.jsx'
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx'

import { WINNING_COMBINATIONS } from './winning-combinations.js'

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X'
}

function deriveWinner(gameBoard, players) {
  let winner

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

    console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol)
    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasADraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      return [{
        square: { row: rowIndex, col: colIndex },
        player: deriveActivePlayer(gameTurns)
      }, ...prevTurns]
    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasADraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
