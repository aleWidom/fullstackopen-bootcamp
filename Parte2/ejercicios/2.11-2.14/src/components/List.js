//EJ2.12
/* import React, { useEffect, useState } from 'react';
import axios from 'axios'


const List = ({ newFilter }) => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const { data } = response
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
    } else {

        const countrySearch = country.filter((e) => {
            return e.name.common.toUpperCase().includes(newFilter.toUpperCase())
        })

        console.log(countrySearch)

        if (countrySearch.length === 0) {
            return <p>No hay nombres que coincidan</p>
        } else if (countrySearch.length >= 10) {
            return (
                <>
                    <p>Too many matches, specify another filter</p>
                </>
            )
        } else if (countrySearch.length < 10 && countrySearch.length > 1) {
            return (
                <ul>
                    {countrySearch.map((e) => {
                        return <li key={e.name.common}>{e.name.common}</li>
                    })}
                </ul>
            )
        } else if (countrySearch.length === 1) {
            return (
                <>
                    {countrySearch.map((e) => {
                        return <div key={e.name.common}>
                            <p>País que coincide con su búsqueda: {e.name.common}</p>
                            <div>{e.capital.map((e) =>
                                <p key={e}>Capital: {e}</p>
                            )}</div>
                            <p>Population: {e.population}</p>
                            <img src={e.flags.png}/>
                        </div>
                    })}
                </>
            )
        }
    }
};

export default List;
 */


//EJ2.13
/* import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Button from './Button';


const List = ({ value, show, setShow }) => {

    const [country, setCountry] = useState([])

    const [countryDetail, setCountryDetail] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const { data } = response
                setCountry(data)
            })
    }, [])



    const handleClickShowNoShow = (country) => () => {
        setShow(true)
        setCountryDetail(country)
    }



    if (value.length === 0) {
        return (
            <ul>
                {country.map((e) => {
                    return <li key={e.name.common}>{e.name.common}</li>
                })}
            </ul>
        )
    } else {

        const countrySearch = country.filter((e) => {
            return e.name.common.toUpperCase().includes(value.toUpperCase())
        })


        if (countrySearch.length === 0) {
            return <p>No hay nombres que coincidan</p>
        } else if (countrySearch.length >= 10) {
            return (
                <>
                    <p>Too many matches, specify another filter</p>
                </>
            )
        } else if (countrySearch.length < 10 && countrySearch.length > 1) {
            if (show === false) {
                return (
                    <>
                        {countrySearch.map((e) => {
                            return (
                                <div key={e.name.common}>
                                    <p key={e.name.common}>{e.name.common}</p>
                                    <Button handleClick={handleClickShowNoShow(e)} title={"show detail"} />
                                </div>
                            )
                        })}
                    </>
                )
            } else {
                return (
                    <>
                        <p>País: {countryDetail.name.common}</p>
                        <div>{countryDetail.capital.map((e) =>
                            <p key={e}>Capital: {e}</p>
                        )}</div>
                        <p>Population: {countryDetail.population}</p>
                        <img src={countryDetail.flags.png} alt='flag' />
                    </>
                )
            }
        } else if (countrySearch.length === 1) {
            return (
                <>
                    {countrySearch.map((e) => {
                        return <div key={e.name.common}>
                            <p>País que coincide con su búsqueda: {e.name.common}</p>
                            <div>{e.capital.map((e) =>
                                <p key={e}>Capital: {e}</p>
                            )}</div>
                            <p>Population: {e.population}</p>
                            <img src={e.flags.png} alt='flag' />
                        </div>
                    })}
                </>
            )
        }
    }
};

export default List;
 */


//EJ2.14
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Button from './Button';



const List = ({ value, show, setShow }) => {

    const [country, setCountry] = useState([])

    const [countryDetail, setCountryDetail] = useState([])

    const [weather, setWeather] = useState("")



    useEffect(() => {
        console.log("effect1")
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                const { data } = response
                const countrySearch = data.filter((e) => {
                    return e.name.common.toUpperCase().includes(value.toUpperCase())
                })
                setCountry(countrySearch)
            })
    }, [value])



    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        if (country.length === 1) {
            axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country[0].name.common}`)
                .then((resultado) => {
                    setWeather(resultado)
                })
                .catch((e) => {
                    setWeather("Argentina")
                })
        }
    }, [country])


    const handleClickShowNoShow = (country) => () => {
        setShow(true)
        setCountryDetail(country)
    }




    if (value.length === 0) {
        return (
            <ul>
                {country.map((e) => {
                    return <li key={e.name.common}>{e.name.common}</li>
                })}
            </ul>
        )
    } else {
        if (country.length === 0) {
            return <p>No hay nombres que coincidan</p>
        } else if (country.length >= 10) {
            return (
                <>
                    <p>Too many matches, specify another filter</p>
                </>
            )
        } else if (country.length < 10 && country.length > 1) {
            if (show === false) {
                return (
                    <>
                        {country.map((e) => {
                            return (
                                <div key={e.name.common}>
                                    <p key={e.name.common}>{e.name.common}</p>
                                    <Button handleClick={handleClickShowNoShow(e)} title={"show detail"} />
                                </div>
                            )
                        })}
                    </>
                )
            } else {
                return (
                    <>
                        <p>País: {countryDetail.name.common}</p>
                        <div>{countryDetail.capital ? countryDetail.capital.map((e) =>
                            <p key={e}>Capital: {e}</p>
                        ) : ""}</div>
                        <p>Population: {countryDetail.population}</p>
                        <img src={countryDetail.flags.png} alt='flag' />
                    </>
                )
            }
        } else if (country.length === 1) {
            if (weather === "") {
                return <p></p>
            } else {
                return (
                    <>
                        {country.map((e) => {
                            return <div key={e.name.common}>
                                <h4>País que coincide con su búsqueda: {e.name.common}</h4>
                                <div>{e.capital ? e.capital.map((e) =>
                                    <p key={e}>Capital: {e}</p>
                                ) : ""}</div>
                                <p>Population: {e.population}</p>
                                <img src={e.flags.png} alt='flag' />
                            </div>
                        })}
                        <h4>Temperatura</h4>
                        <p>{weather.data.current ? `${weather.data.current.temperature} ºC` : "No disponible"}</p>
                        <p>{weather.data.current ? weather.data.current.weather_icons.map((e) => {
                            return <img alt={'icon-wather'} src={e} key={e} />
                        }) : ""}</p>
                    </>
                )
            }
        }
    }
};

export default List;
