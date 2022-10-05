import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';


class Subject extends Component {
  constructor() {
    super()
   
  
  }
  
  render() {
    return (
      
        <div className="subject">
            <h2>Subject</h2>
            <h2>Lesson Title</h2>
            <h2>Objective</h2>
            <h2>Lesson Type</h2>
            <input type="button" value="Create Lesson"/>
        </div>
      
    )
  }
}

export default Subject;
