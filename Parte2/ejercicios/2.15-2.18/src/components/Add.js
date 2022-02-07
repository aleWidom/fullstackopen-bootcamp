import React, { useState } from 'react'
import { create } from '../services/persons';

const Add = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')

    const [newNumber, setNewNumber] = useState('')

    const handleChangeName = (e) => {
        setNewName(e.target.value)
    }

    const handleChangeNumber = (e) => {
        setNewNumber(e.target.value)
    }


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
            create(newPerson)
                .then((response) => {
                    setPersons([...persons, response])
                })
                .catch((error) => alert(error))
            setNewName('')
            setNewNumber('')
        }
    }



    return (
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
    )
};

export default Add;
