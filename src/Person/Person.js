import React from 'react';
import './Person.css';

const Person = props => {

    return (
        <div className="Person">
            <p>I am a person. My name is {props.name} and I just turned {props.age}</p>
            {/* <button onClick={props.click}>Switch Name</button> */}
            <input type="text" onChange={props.change} value={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;
