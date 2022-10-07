

import React, {Component} from 'react'

import logo from './purplelogo.png'

import './App.css'

import MonthParent from './calendar/MonthParent.js'

import Subject from './Subject'
//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//Using Kirk Strobeck's answer as a guide for the drop down




class App extends Component {
  render() {
    return (

     <div id='idxContent'> {/* large parent div that holds all content of index page */}
        <div id='nav' className='nav'> {/* holds logo */}
          <div><a href='./Subject/calender.js' id='logo'><img src={logo} alt='Digital TA Logo' className='logo'/></a></div> {/* logo png source */}
        </div>
        <div className='dateContainer'> {/* container that holds the date */}
        <MonthParent />
          <div id= 'date' className='date'>Date</div>{/* the date */}
        </div>
       
     <div id='idxContent'>
        <div id='nav'>
          <div id='logo'><img src={logo} alt='Digital TA Logo' className='logo'/></div>

        </div>
        <div>{/* this is the parent container to the index tabs that hold each lesson plan. */}
          <div className='top'> {/* top half of lesson plan index tabs */}
          
              <Subject name ={''}/>
              <Subject name ={''}/>
              <Subject name ={''}/>
          </div> 
          <div className='bottom'> {/* bottom half of lesson plan index tabs*/}
              <Subject name ={''}/>
              <Subject name ={''}/>
              <Subject name ={''}/>
          </div>   
        </div>
     </div>
     </div>
    )
  }

}

export default App