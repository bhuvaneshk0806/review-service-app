import React from 'react';
import classes from './QuestionHeader.css'

const questionHeader = (props) => (
    <div className={classes.QuestionHeader}>
        <p>{props.ratingSummary}</p>
    </div>
);

export default questionHeader;