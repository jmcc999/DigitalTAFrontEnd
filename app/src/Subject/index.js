import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

class Subject extends Component {
  /* constructor() {
    super()
  } */

  render() {
    return (
        <div className="subjectContainer">
          <div>
            <h2 className="subjectName">Subject</h2>
            <h2 className="lessonTitle">Lesson Title</h2>
            <h3 className="objective">Objective</h3>
            <h3 className="lessonType">Lesson Type</h3>
            <input type="button" value="Create Lesson" className="createLesson"/>
          </div>
        </div>
      
    )
  }
}

export default Subject;
