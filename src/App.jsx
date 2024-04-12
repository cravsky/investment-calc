import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    //Remember that tricky part where we had to update the state with the new value
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue // the + sign is used to convert the string to a number
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
