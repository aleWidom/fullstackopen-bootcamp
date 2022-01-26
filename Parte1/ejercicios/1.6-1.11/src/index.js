//EJ1.6
/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'
import Title from './components/Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad= () => {
    setBad(bad+1)
  }


  return (
    <>
      <Title title="give feedback"/>
      <Button title="good" handleClick={handleGood}/>
      <Button title="neutral" handleClick={handleNeutral}/>
      <Button title="bad" handleClick={handleBad}/>
      <Title title="statistics"/>
      <Description title={"Good"} count={good} />
      <Description title={"Neutral"} count={neutral} />
      <Description title={"Bad"} count={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) */


//EJ1.7
/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'
import Title from './components/Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad= () => {
    setBad(bad+1)
  }


  return (
    <>
      <Title title="give feedback"/>
      <Button title="good" handleClick={handleGood}/>
      <Button title="neutral" handleClick={handleNeutral}/>
      <Button title="bad" handleClick={handleBad}/>
      <Title title="statistics"/>
      <Description title={"Good"} count={good} />
      <Description title={"Neutral"} count={neutral} />
      <Description title={"Bad"} count={bad} />
      <hr/>
      <Description title={"All"} count={good+neutral+bad} />
      <Description title={"Average"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : (good-bad)/(good+neutral+bad)}/>
      <Description title={"Positive"} title2={"%"} count={good === 0 && neutral === 0 && bad === 0 ? 0 : ((good)/(good+neutral+bad))*100}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) */


//Ej1.8
/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Title from './components/Title'
import Statics from './components/Statics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad= () => {
    setBad(bad+1)
  }


  return (
    <>
      <Title title="give feedback"/>
      <Button title="good" handleClick={handleGood}/>
      <Button title="neutral" handleClick={handleNeutral}/>
      <Button title="bad" handleClick={handleBad}/>
      <Title title="statistics"/>
      <Statics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) */


//EJ1.9-1.10-1.11
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Title from './components/Title'
import Statics from './components/Statics'
import Description from './components/Description';



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad= () => {
    setBad(bad+1)
  }


  return (
    <>
      <Title title="give feedback"/>
      <Button title="good" handleClick={handleGood}/>
      <Button title="neutral" handleClick={handleNeutral}/>
      <Button title="bad" handleClick={handleBad}/>
      <Title title="statistics"/>
      {good === 0 && neutral === 0 && bad === 0 ? <Description title={"No feedback given"}/> : <Statics good={good} neutral={neutral} bad={bad}/>}
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) 

