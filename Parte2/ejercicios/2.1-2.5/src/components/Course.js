//EJ2.1
/* import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({course}) => {
    console.log(course)
  return (
    <>
    <Header title={course.name} />
    <Content partExercises={course.parts} />
    </>
  )
};

export default Course;
 */


//Ej2.2
import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({course}) => {
    console.log(course)
  return (
    <>
    <Header title={course.name} />
    <Content partExercises={course.parts} />
    <Total partExercises={course.parts}/>
    </>
  )
};

export default Course;
