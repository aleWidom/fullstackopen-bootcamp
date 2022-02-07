//EJ2.15
import React, { useState } from 'react'
import List from './List'

const Search = ({ persons }) => {

    const [newFilter, setNewFilter] = useState('')

    const handleFilter = (e) => {
        setNewFilter(e.target.value)
    }

    return (
        <div>
            filter shown width: <input onChange={handleFilter} value={newFilter} />
            <List persons={persons} newFilter={newFilter} />
        </div>
    )
};

export default Search;

