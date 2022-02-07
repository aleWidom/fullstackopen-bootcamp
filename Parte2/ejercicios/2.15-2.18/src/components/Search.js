//EJ2.15
 import React from 'react';
 import List from './List'

const Search = ({ handleFilter, newFilter, persons }) => {
    return (
        <div>
            filter shown width: <input onChange={handleFilter} value={newFilter} />
            <List persons={persons}/>
        </div>
    )
};

export default Search; 

