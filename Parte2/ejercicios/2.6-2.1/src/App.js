//EJ2.6
/* import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleAddPersons = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons([...persons, newPerson])
    setNewName('')
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPersons}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
      {persons.map((e)=> {
       return <li key={e.name}>{e.name}</li>
      })}
      </ul>
    </div>
  )
}

export default App; */


//EJ2.7
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleAddPersons = (e) => {
    e.preventDefault()
    const arrayName = persons.map((e)=> {
     return e.name
    })

    if(arrayName.indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const newPerson = {
        name: newName
      }
      setPersons([...persons, newPerson])
      setNewName('')
    }
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPersons}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
      {persons.map((e)=> {
       return <li key={e.name}>{e.name}</li>
      })}
      </ul>
    </div>
  )
}

export default App;
