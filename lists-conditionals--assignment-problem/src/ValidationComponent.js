import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.input}/>
            <p>{props.len}</p>
        </div>
    )
};

export default ValidationComponent;