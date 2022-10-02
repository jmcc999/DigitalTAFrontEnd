import React, {Component} from "react";
import logo from './purplelogo.png';
import './App.css';
import Subject from './Subject';
class App extends Component {
  render() {
    return (
     <div id="idxContent"> {/* large parent div that holds all content of index page */}
        <div id="nav" className="nav"> {/* holds logo */}
          <div><a href="./Subject/calender.js" id="logo"><img src={logo} alt="Digital TA Logo" className="logo"/></a></div> {/* logo png source */}
        </div>
        <div className="dateContainer"> {/* container that holds the date */}
          <div id= "date" className="date">Date</div>{/* the date */}
        </div>
        <div>{/* this is the parent container to the index tabs that hold each lesson plan. */}
          <div className="top"> {/* top half of lesson plan index tabs */}
              <Subject name ={''}/>
              <Subject name ={''}/>
              <Subject name ={''}/>
          </div> 
          <div className="bottom"> {/* bottom half of lesson plan index tabs*/}
              <Subject name ={''}/>
              <Subject name ={''}/>
              <Subject name ={''}/>
          </div>   
        </div>
     </div>
    );
  }
}

export default App;
