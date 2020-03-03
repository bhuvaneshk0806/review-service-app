import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import UserDetails from './components/UserDetails/UserDetails';
import QuestionHeader from './components/QuestionHeaders/QuestionHeader';
import Questions from './components/Questions/Questions';


class App extends Component {
  state = {
    title : 'Customer Experience Management (CSAT) ',
    userDetails : {
      organization : 'organization',
      pointOfContact : 'point Of Contact',
      dateOfFeedback : 'Date of Feedback',
      project : 'Project'
    },
    ratingSummary : 'Considering all the aspects of your experience with Nous, please indicate your opinion vis-à-vis the specific  statements mentioned in the table below. Please use the 5-point scale and indicate your response for each statement.'
   
    
    
  }
  render () {
    return (
      <div>
        <AppHeader title={this.state.title}></AppHeader>
        <UserDetails userDetails={this.state.userDetails}/>
        <QuestionHeader ratingSummary={this.state.ratingSummary}/>
        <Questions/>
      </div>
    );
  }
}

export default App;
