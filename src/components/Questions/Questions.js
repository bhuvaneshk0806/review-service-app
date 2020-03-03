import React from 'react';
const questions = (props) => (
    <div>
        <table style={{border:"1px solid black"}}>
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Chosen Rating</th>
                <th>Comments</th>
            </tr>
            <tr>
                <td>1</td>
                <th>Overall Satisfaction</th>
                <td>Overall Interactions with Nous as a service provider</td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>3</td>
                <th>Scope Management  </th>
                <td>Nous’s ability to deliver the project as per agreed scope </td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>4</td>
                <th>Change Management </th>
                <td>Ability of Nous to anticipate / manage changes to your satisfaction</td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>5</td>
                <th>Project / Program  Management  </th>
                <td>Nous is able to ensure good visibility provided on the status of Milestones, dependencies, resourcing and manage risks </td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
        </table>
    </div>
);
export default questions;