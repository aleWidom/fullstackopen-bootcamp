//EJ1.6-1.7-1.8-1.9-1.10-1.11
import React from 'react';

const Button = ({title, handleClick}) => {
  return <button onClick={handleClick}>{title}</button>;
};

export default Button;
