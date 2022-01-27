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
      <Description title={anecdotes[selected]} count={votes[selected].votes + " votes"}/>
      <Button handleClick={handleVote()} title={"Vote"} />
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
) 
 */



//Ej1.14
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Description from './components/Description'
import Title from './components/Title'
import title from './helpers/title'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

//creo nuevo array y lo pongo como estado con cada indice con un objeto con las anecdota y los votos
const noteObject = anecdotes.map((e) => {
  return { anecdotes: e, votes: 0 }
})



const App = () => {

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(noteObject)

  /*Se ejecuta cada vez que se apreta el botón Anecdota random, se busca un número random, se lo redondea y se setea ese número al estado de número selected*/
  const handleRandom = () => {
    const numberRandom = Math.random() * 5
    const numberRound = Math.round(numberRandom)
    setSelected(numberRound);
  }

  /*Se ejecuta esta función cada vez que hay un voto nuevo, se reemplaza el objeto que contiene la informacion agrengando el voto según el indice que se saca a través del numero seleccionado y se le suma uno*/
  const handleVote = () => () => {
    setVotes(
      [...votes],
      votes[selected].votes = votes[selected].votes + 1
    )
  }

  
  const titleSelected = title(votes);

  return (
    <>
      <Button handleClick={handleRandom} title={"Anecdota random"} />
      <Description title={anecdotes[selected]} count={votes[selected].votes + " votes"} />
      <Button handleClick={handleVote()} title={"Vote"} />
      <Title title={titleSelected}/>
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
) 