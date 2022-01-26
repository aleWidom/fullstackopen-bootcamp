// EJ1.3-1.4-1.5

import React from 'react';
import Parts from './Parts';

const Content = ({ partExercises }) => {
    return (
        <>
            <Parts partExercises={partExercises[0]} />
            <Parts partExercises={partExercises[1]} />
            <Parts partExercises={partExercises[2]} />
        </>
    )
};

export default Content; 

