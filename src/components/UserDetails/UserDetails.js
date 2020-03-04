import React from 'react';

const userDetails = (props) => (
    <div stye={{
        border:"1px solid black",alignItems:"center",marginLeft:"150px"
    }}>
        <table style={{
            border:"3px solid black",alignItems:"center",width:"600px",height:"100px"
        }}>
            <tr >
                <td style={{border:"1px solid black " }}>Organization</td>
                <td style={{border:"1px solid black"}}><input type='text' width='500px'></input></td>
            </tr>
            <tr>
                <td style={{border:"1px solid black"}}>Client –Point of contact</td>
                <td style={{border:"1px solid black"}}><input type='text' maxLength='500'></input></td>
            </tr>
            <tr>
                <td style={{border:"1px solid black"}}>Date of Feedback</td>
                <td style={{border:"1px solid black"}}><input type='text'></input></td>
            </tr>
            <tr>
                <td style={{border:"1px solid black"}}>Current Project</td>
                <td style={{border:"1px solid black"}}><input type='text'></input></td>
            </tr>
        </table>
    </div>
);

export default userDetails;