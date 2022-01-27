//EJ2.1-2.2-2.3-2.4
import React from 'react';
import Parts from './Parts';

const Content = ({ partExercises }) => {
    return (
        <>
        {partExercises.map((e, i)=> {
            return <Parts key={e.id} partExercises={partExercises[i]} />
        })}
        </>
    )
};

export default Content; 

