//EJ2.11
import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import ListPerson from './components/ListPerson'
import axios from 'axios'

const App = () => {

  /*Datos de Agenda*/

  useEffect(()=> {
    axios
    .get('http://localhost:3001/persons')
    .then((response)=> {
      const {data} = response
      setPersons(data)
    })
  }, [])


  const [persons, setPersons] = useState([])

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