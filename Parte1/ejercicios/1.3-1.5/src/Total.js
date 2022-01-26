// EJ1.3
/* import React from 'react';

const Total = ({ exercises }) => {
    return <div>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</div>;
};

export default Total;  */


//Ej1.4 - 1.5
 import React from 'react';

const Total = ({ exercises }) => {
    return <div>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}</div>;
};

export default Total; 
