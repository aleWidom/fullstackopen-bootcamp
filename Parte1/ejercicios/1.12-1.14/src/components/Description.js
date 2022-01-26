/* //EJ 1.12
import React from 'react';

const Description = ({title}) => {
  return (
    <p>{title}</p>
  );
};

export default Description;
 */

//EJ 1.13
import React from 'react';

const Description = ({title, count}) => {
  return (
    <p>{title} {count}</p>
  );
};

export default Description;