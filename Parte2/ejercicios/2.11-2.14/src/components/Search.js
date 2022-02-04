//EJ2.11
/* import React from 'react';

const Search = ({ handleFilter, newFilter }) => {
    return (
        <div>
            filter shown width: <input onChange={handleFilter} value={newFilter} />
        </div>
    )
};

export default Search; */



//EJ2.12
import React, { useState } from 'react';
import List from './List';


const Search = () => {

    /*Datos input Search*/

    const [newFilter, setNewFilter] = useState('')

    const [show, setShow] = useState(false)


    /*Funciòn que ve cambios en el input de búsqueda*/
    const handleFilter = (e) => {
        setNewFilter(e.target.value)
        setShow(false)
    }

    return (
        <div>
            find countries: <input onChange={handleFilter} value={newFilter} />
            <List value={newFilter} show={show} setShow={setShow} />
        </div>
    )
};

export default Search;


