//EJ2.2
/*  import React from 'react';

const Total = ({ partExercises }) => {

    let sumaIndex = 0;

   const suma = partExercises.map((e)=> {
        sumaIndex += e.exercises
        return sumaIndex;
    })

   return <h4>Total exercises: {suma[suma.length-1]}</h4>;
}

export default Total; 
 */


//EJ2.3-2.4
import React from 'react';

const Total = ({ partExercises }) => {

   const suma = partExercises.map((e)=>e.exercises).reduce((acumulado,actual) => acumulado + actual )

   return <h4>Total exercises: {suma}</h4>;
}

export default Total; 
