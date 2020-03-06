import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import UserDetails from './components/UserDetails/UserDetails';
import QuestionHeader from './components/QuestionHeaders/QuestionHeader';
import Questions from './components/Questions/Questions';
import axios from 'axios';
import Button from './components/Button/Button';


class App extends Component {

 
  state = {
      title : 'Customer Experience Management (CSAT) ',
      userDetails : {
      organization : 'organization',
      pointOfContact : 'point Of Contact',
      dateOfFeedback : 'Date of Feedback',
      project : 'Project'
    },
    posts: [],
    ratingSummary : 'Considering all the aspects of your experience with Nous, please indicate your opinion vis-à-vis the specific  statements mentioned in the table below. Please use the 5-point scale and indicate your response for each statement.'
   
   }

  componentWillMount(){
    axios.get('http://localhost:8081/customerfeedback/question/questions').then(response => {
      this.setState({posts: response.data});
          
     });
  }

  buttonClickHandler(){
    alert("Submitted..!")
  }

  render () {
    const posts = this.state.posts;
    return (
      <div style={{border:"1px solid aqua",width:'100%', height:"100%",margin:"10px"}}>
        <AppHeader title={this.state.title}></AppHeader>
        <UserDetails userDetails={this.state.userDetails}/>
        <QuestionHeader ratingSummary={this.state.ratingSummary}/>
        <Questions data={posts}/>
        <Button clicked={this.buttonClickHandler}/>
       </div>
    );
  }
}

export default App;
