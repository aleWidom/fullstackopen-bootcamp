//EJ1.3
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Total from './Total';
import Content from './Content';


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content partExercises={[part1, part2, part3]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 */


//EJ1.4
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Total from './Total';
import Content from './Content';


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course} />
      <Content partExercises={parts}/>
    <Total exercises={parts}  /> 
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); */



//EJ1.5
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Total from './Total';
import Content from './Content';


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content partExercises={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);