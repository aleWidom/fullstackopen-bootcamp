
import Note from "./components/Note"
import axios from "axios"
import { useState, useEffect } from "react"


const App = () => {


  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  const [showAll, setShowAll] = useState(true)




  const toggleImportance = (id) => () => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(
        note => note.id !== id ? note : response.data))
    })
  }


  useEffect(() => {
    axios.get('http://localhost:3001/notes')
      .then((resultado) => {
        setNotes(resultado.data)
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

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
      })
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

export default App;
