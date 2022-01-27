//EJ2.4
import React from 'react';
import Course from './Course';

const Courses = ({courses}) => {
  const mapeo  = courses.map((e)=> {
        return <Course key={e.id} title={e.name} parts={e.parts}/>
    })

    return (
        <>
        {mapeo}
        </>
    )
};

export default Courses;
