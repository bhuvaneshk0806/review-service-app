import React from 'react';
import classes from './AppHeader.css';
const appHeader = (props) => (
    <div style={{color:'red', backgroundColor: 'aqua',textAlign:'center'}}
        className={classes.AppHeader}>
        <p className={classes.Color}>{props.title}</p>
    </div>
);
export default appHeader;