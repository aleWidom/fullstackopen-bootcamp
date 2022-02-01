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
/* import React, { useState } from 'react'

const App = () => {

  *Datos de Agenda
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1167138894' }
  ])

  *Datos input Name
  const [newName, setNewName] = useState('')


  *Datos input Number
  const [newNumber, setNewNumber] = useState('')


  *Funciòn para agregar datos a la agenda
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

  *Funciòn que ve cambios en el input name
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
 */


//EJ2.9
/* import React, { useState } from 'react'

const App = () => {

 Datos de Agenda
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

 Datos input Name
  const [newName, setNewName] = useState('')


  Datos input Number
  const [newNumber, setNewNumber] = useState('')


  Datos input Number
  const [newFilter, setNewFilter] = useState('')


  Funciòn para agregar datos a la agenda
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

  Funciòn que ve cambios en el input name
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }


  const personFilter = persons.filter((e) => {
    return e.name.toUpperCase().includes(newFilter.toUpperCase())
  })


  if (newFilter.length === 0) {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown width: <input onChange={handleFilter} value={newFilter} />
        </div>
        <h2>Add a new</h2>
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
  } else {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown width: <input onChange={handleFilter} value={newFilter} />
        </div>
        <h2>Add a new</h2>
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
          {personFilter.length === 0 ? "No hay nombres que coincidan" : personFilter.map((e) => {
            return <li key={e.name}>{e.name} - {e.number}</li>
          })}
        </ul>
      </div>
    )
  }

}

export default App;
 */


//EJ2.10
import React, { useState } from 'react'
import Title from './components/Title'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import ListPerson from './components/ListPerson'

const App = () => {

  /*Datos de Agenda*/
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  /*Datos input Name*/
  const [newName, setNewName] = useState('')


  /*Datos input Number*/
  const [newNumber, setNewNumber] = useState('')


  /*Datos input Search*/
  const [newFilter, setNewFilter] = useState('')


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

  /*Funciòn que ve cambios en el input number*/
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

    /*Funciòn que ve cambios en el input de búsqueda*/
  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }


  return (
    <div>
      <Title title={"Phonebook"} />
      <Search handleFilter={handleFilter} newFilter={newFilter} />
      <Title title={"Add a new"} />
      <AddPerson handleAddPersons={handleAddPersons} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} />
      <ListPerson persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App;