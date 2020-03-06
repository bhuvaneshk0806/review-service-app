import React from 'react';

const button = (props) => (
    <div style={{
        alignItems:'center',marginLeft:'300px'
    }}>
        <button onClick={props.clicked}>Submit</button>
        <button onClick={props.clicked} style={{
        marginLeft:'10px'
    }}>Cancel</button>
    </div>
);

export default button;