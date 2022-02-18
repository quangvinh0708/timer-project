

import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button