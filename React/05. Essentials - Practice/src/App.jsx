import { useState } from 'react'

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(event, inputName) {
    setUserInput((currUserInput) => {
      return { ...userInput, [inputName]: +event.target.value }
    })
  }

  const isValidInput = userInput.duration > 0

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput}></UserInput>
      {isValidInput && <Results userInput={userInput}></Results>}
      {!isValidInput && <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
