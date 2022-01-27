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


//Ej2.2-2.3-2.4
import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'

const Course = ({title, parts}) => {
  return (
    <>
    <Header title={title} />
    <Content partExercises={parts} />
    <Total partExercises={parts}/>
    </>
  )
};

export default Course;
