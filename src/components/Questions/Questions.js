import React from 'react';
const questions = (props) => {
    return(
        <table style={{width:"95%"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Rating</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                    <tr>
                        <strong><td>{row.questionId}</td></strong>
                       <strong><td>{row.questionCategory}</td></strong> 
                        <td>{row.question}</td>
                        <td>
                            <select>
                                {
                                   row.options.map(option => (
                                        <option value={option.optionValue}>
                                            {option.optionValue}
                                        </option>
                                    ))

                                }
                            </select>
                        </td>
                        <td>
                            <input type="text" value="" />
                        </td>
                    </tr>
                    
                ))
            }
                
            </tbody>
        </table>
    )
}

export default questions;