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
/* import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleAddPersons = (e) => {
    e.preventDefault()
    const arrayName = persons.map((e) => {
      return e.name
    })

    if (arrayName.indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const newPerson = {
        name: newName
      }
      console.log(persons)
      setPersons([...persons, newPerson])
      setNewName('')
      console.log(persons)
    }
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  console.log(persons)

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
        {persons.map((e) => {
          return <li key={e.name}>{e.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
 */


//EJ2.8
import React, { useState } from 'react'

const App = () => {

  /*Datos de Agenda*/
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1167138894' }
  ])

  /*Datos input Name*/
  const [newName, setNewName] = useState('')


  /*Datos input Number*/
  const [newNumber, setNewNumber] = useState('')


  /*Funciòn para agregar datos a la agenda*/
  const handleAddPersons = (e) => {
    e.preventDefault()
    const arrayName = persons.map((e) => {
      return e.name
    })

    const arrayNumber = persons.map((e) => {
      return e.number
    })

    if (arrayName.indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } else if (arrayNumber.indexOf(newNumber) !== -1) {
      alert(`${newNumber} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  /*Funciòn que ve cambios en el input name*/
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPersons}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map((e) => {
          return <li key={e.name}>{e.name} - {e.number}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
