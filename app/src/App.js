import React, {Component} from "react";
import logo from './purplelogo.png';
import './App.css';
import Subject from './Subject'

class App extends Component {
  render() {
    return (
     <div id="idxContent">
        <div id="nav">
          <div id="logo"><img src={logo} alt="Digital TA Logo" /></div>
        </div>
        <div className="dateContainer">
          <div id= "date" className="date">Date</div>
        </div>
          <Subject name ={''}/>
          <Subject name ={''}/>
          <Subject name ={''}/>
          <Subject name ={''}/>
          <Subject name ={''}/>
          <Subject name ={''}/>
        
     </div>
    );
  }
}

export default App;
