

import React, {Component} from 'react'
// COMPONENTS
import Home from './components/home'

import Index from './components/index'

import Login from './components/login'

import MonthParent from './components/MonthParent'

import Subject from './components/index'

import './App.css';

//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//Using Kirk Strobeck's answer as a guide for the drop down

class App extends Component {
  render() {
    return (
<div>
    <div id="idxContent"> {/* large parent div that holds all content of index page */}
        <div id="nav" className="nav"><Home /><Index /><Login /> {/* holds logo */}
          <div id="logo"><img src='' alt="Digital TA Logo" className="logo"/></div> 
        </div>
        <div className="dateContainer">     
        <MonthParent />
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
</div>
  );
}
}


export default App;