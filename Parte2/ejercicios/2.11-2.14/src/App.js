//EJ2.11
/* import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import Search from './components/Search'
import Add from './components/Add'
import List from './components/List'
import axios from 'axios'

const App = () => {



  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        const { data } = response
        setPersons(data)
      })
  }, [])


  const [persons, setPersons] = useState([])


  const [newName, setNewName] = useState('')



  const [newNumber, setNewNumber] = useState('')



  const [newFilter, setNewFilter] = useState('')



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


  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }


  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }


  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }


  return (
    <div>
      <Title title={"Phonebook"} />
      <Search handleFilter={handleFilter} newFilter={newFilter} />
      <Title title={"Add a new"} />
      <Add handleAddPersons={handleAddPersons} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} />
      <List persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App; */



//EJ2.12
import Search from './components/Search';


const App = () => {



  return (
    <div>
      <Search />
    </div>
  )
}

export default App;