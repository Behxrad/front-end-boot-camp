import {useState, useRef} from 'react'

export default function Player() {
  const playerName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState()

  function handleClick(event) {
    const name = playerName.current.value
    playerName.current.value = ''
    setEnteredPlayerName(() => name)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
