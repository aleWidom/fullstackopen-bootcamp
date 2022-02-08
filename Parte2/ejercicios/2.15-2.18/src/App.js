/* 
import Note from "./components/Note"
import { useState, useEffect } from "react"
import { getAll, create, update } from "./services/notes"


const App = () => {


  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  const [showAll, setShowAll] = useState(true)

  const toggleImportance = (id) => () => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    update(id, changedNote)
    .then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server ${error}`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }


  useEffect(() => {
    getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, []);


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
    }
    setNewNote('')
      create(noteObject)
      .then((response)=> setNotes(notes.concat(response))
      )
  }


  if (showAll) {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notes.map(note => (
            <Note key={note.id} note={note} toggleImportance={toggleImportance(note.id)} />
          ))}
        </ul>
        <form onSubmit={addNote} >
          <input
            value={newNote}
            onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notes.filter(note => note.important === true).map((note => (
            <Note key={note.id} note={note} toggleImportance={toggleImportance(note.id)} />
          )))}
        </ul>
        <form onSubmit={addNote} >
          <input
            value={newNote}
            onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }
}

export default App; */



//EJ2.15
import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import Search from './components/Search'
import Add from './components/Add'
import { getAll } from './services/persons'

const App = () => {

  useEffect(() => {
    console.log("useEffectAPP")
    getAll()
      .then((response) => {
        setPersons(response)
      })
      .catch((error) => alert(error))
  }, [])


  const [persons, setPersons] = useState([])

  console.log("APP")

  return (
    <div>
      <Title title={"Phonebook"} />
      <Search persons={persons} setPersons={setPersons} />
      <Title title={"Add a new"} />
      <Add persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App; 