import React from 'react';

const Add = ({ handleAddPersons, newName, handleChangeName, newNumber, handleChangeNumber }) => {
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
