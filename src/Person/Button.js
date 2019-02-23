import React from 'react';
import './Person.css';

const Button = props => {
    return (
        <button className={props.className}
          onClick={props.click}>
          {props.children}
        </button>
    )
}

export default Button;