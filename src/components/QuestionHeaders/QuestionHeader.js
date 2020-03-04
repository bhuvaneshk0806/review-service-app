import React from 'react';
import classes from './QuestionHeader.css'

const questionHeader = (props) => (
    <div className={classes.QuestionHeader} style={{width:"95%",marginLeft:"15px"}}>
        <strong><p>{props.ratingSummary}</p></strong>
    </div>
);

export default questionHeader;