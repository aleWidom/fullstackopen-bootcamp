import React from 'react';

const ListPerson = ({ persons, newFilter }) => {

    const personFilter = persons.filter((e) => {
        return e.name.toUpperCase().includes(newFilter.toUpperCase())
    })

    if (newFilter.length === 0) {
        return (
            <ul>
                {persons.map((e) => {
                    return <li key={e.name}>{e.name} - {e.number}</li>
                })}
            </ul>
        )
    } else {
        return (
            <ul>
                {personFilter.length === 0 ? "No hay nombres que coincidan" : personFilter.map((e) => {
                    return <li key={e.name}>{e.name} - {e.number}</li>
                })}
            </ul>
        )
    }
};

export default ListPerson;
