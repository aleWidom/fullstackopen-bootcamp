//EJ1.12
/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = () => {
  const [selected, setSelected] = useState(0)

  const random = () => {
    const numberRandom = Math.random() * 5
    const numberRound = Math.round(numberRandom)
    setSelected(numberRound);
  }

  return (
    <>
      <Button handleClick={random} title={"Anecdota random"} />
      <Description title={anecdotes[selected]} />
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
) */


//Ej1.13
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const noteObject = anecdotes.map((e) => {
  return { anecdotes: e, votes: 0 }
})

const App = () => {

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(noteObject)

  const handleRandom = () => {
    const numberRandom = Math.random() * 5
    const numberRound = Math.round(numberRandom)
    setSelected(numberRound);
  }

  const handleVote = () => () => {
    setVotes(
      [...votes],
      votes[selected].votes = votes[selected].votes + 1
    )
  }

  return (
    <>
      <Button handleClick={handleRandom} title={"Anecdota random"} />
      <Description title={anecdotes[selected]} count={votes[selected].votes + " votes"} />
      <Button handleClick={handleVote()} title={"Vote"} />
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)




//Ej1.14
/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'
import Title from './components/Title'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const noteObject = anecdotes.map((e) => {
  return { anecdotes: e, votes: 0 }
})

const App = () => {

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(noteObject)

  const handleRandom = () => {
    const numberRandom = Math.random() * 5
    const numberRound = Math.round(numberRandom)
    setSelected(numberRound);
  }

  const handleVote = () => () => {
    setVotes(     
      [...votes],
      votes[selected].votes = votes[selected].votes + 1
      )
  }

 const moreVotes= votes.find((e)=> {
    return e.votes === 0
 })

 console.log(moreVotes)



  return (
    <>
      <Button handleClick={handleRandom} title={"Anecdota random"} />
      <Description title={anecdotes[selected]} count={votes[selected].votes + " votes"}/>
      <Button handleClick={handleVote()} title={"Vote"} />
      <Title title={`Anecdota con más votos: ${moreVotes.anecdotes} ${moreVotes.votes} votes`}/> 
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)  */