import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => (
    setGood(good + 1)
  )


  const handleNeutral = () => (
    setNeutral(neutral + 1)
  )

  const handleBad = () => (
    setBad(bad + 1)
  )

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>Give feedback</h1>
        <Button title={"Good"} click={handleGood} />
        <Button title={"Neutral"} click={handleNeutral} />
        <Button title={"Bad"} click={handleBad} />
        <table>
          <tbody>
            <Statistics title="No feedback given" />
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <h1>Give feedback</h1>
        <Button title={"Good"} click={handleGood} />
        <Button title={"Neutral"} click={handleNeutral} />
        <Button title={"Bad"} click={handleBad} />
        <table>
          <tbody>
            <Statistics count={good} title="Good:" />
            <Statistics count={neutral} title="Neutral:" />
            <Statistics count={bad} title="Bad:" />
            <Statistics count={good + neutral + bad} title="Total:" />
            <Statistics count={(good - bad) / (good + neutral + bad)} title="Average:" />
            <Statistics count={good / (good + neutral + bad)} title="Positive:" />
          </tbody>
        </table>
      </>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
)