import React from 'react';

const Parentdiv = props => {
    return <div className={props.classes}>
            {props.children}
           </div>
}

export default Parentdiv;