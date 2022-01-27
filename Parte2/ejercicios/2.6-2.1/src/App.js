
import { useState } from "react";

import React from 'react';

const Note = ({ title }) => {
  return (
    <li>{title}</li>
  )
};


const App = ({ notes }) => {

  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState('a new note...')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes([...note, noteObject])
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <>
      <ul>
        {note.map((e) => {
          return <Note key={e.id} title={e.content} />
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  )
}

export default App;


