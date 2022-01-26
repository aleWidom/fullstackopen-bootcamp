import React, { useState } from 'react';
import Button from './components/Button'
import Selected from './components/Selected'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const arrayObjectAnecdotes = anecdotes.map((e) => (
    { anecdotes: e, votes: 0 }
))


const App = () => {

    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(arrayObjectAnecdotes);


    const handleValue = () => {
        const numberRandom = Math.random() * 5;
        setSelected(Math.round(numberRandom))
    }

    console.log(vote)


    const handleFavorite = () => {
        return setVote(
            [...vote],
            vote[5].votes = 25
        )

    }


    return (
        <>
            <Button title="Anecdota random" click={handleValue} />
            <Selected anecdotes={anecdotes[selected]} />
            <Button title="Vote " click={handleFavorite} />
            {/*   <Button title="Vote como favorita" click={handleFavorite} /> */}
            {/*  <Ranking points={points} /> */}
        </>
    )
}

export default App;
