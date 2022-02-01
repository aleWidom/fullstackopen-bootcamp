import React, { useEffect, useState } from 'react';
import axios from 'axios'


const List = ({ newFilter }) => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const { data } = response
                console.log(data)
                setCountry(data)
            })
    }, [])


    if (newFilter.length === 0) {
        return (
            <ul>
                {country.map((e) => {
                    return <li key={e.name.common}>{e.name.common}</li>
                })}
            </ul>
        )
    } /* else {

        const personFilter = persons.filter((e) => {
            return e.name.toUpperCase().includes(newFilter.toUpperCase())
        })

        return (
            <ul>
                {personFilter.length === 0 ? "No hay nombres que coincidan" : personFilter.map((e) => {
                    return <li key={e.name}>{e.name} - {e.number}</li>
                })}
            </ul>
        )
    } */
};

export default List;
