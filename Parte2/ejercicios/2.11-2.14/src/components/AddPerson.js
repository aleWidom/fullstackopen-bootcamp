import React from 'react';

const AddPerson = ({ handleAddPersons, newName, handleChangeName, newNumber, handleChangeNumber }) => {
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

export default AddPerson;
