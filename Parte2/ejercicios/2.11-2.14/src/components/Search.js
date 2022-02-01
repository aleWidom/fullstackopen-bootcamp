import React from 'react';

const Search = ({ handleFilter, newFilter }) => {
    return (
        <div>
            filter shown width: <input onChange={handleFilter} value={newFilter} />
        </div>
    )
};

export default Search;
