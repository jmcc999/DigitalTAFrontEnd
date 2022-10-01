import React, {Component} from "react";
import logo from './purplelogo.png';
import './App.css';
import Subject from './Subject'


class App extends Component {
  render() {
    return (
     <div id="idxContent">
        <div id="nav">
          <div id="logo"><img src={logo} alt="Digital TA Logo" className="logo"/></div>
        </div>
        <div className="dateContainer">
          <div id= "date" className="date">Date</div>
        </div>
        <div>
          <div className="top"> {/* top half of index subject tabs */}
              <Subject name ={''}/>
              <Subject name ={''}/>
              <Subject name ={''}/>
          </div> 
          <div className="bottom"> {/* bottom half of index subject tabs*/}
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
