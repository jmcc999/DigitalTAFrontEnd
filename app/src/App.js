import React, {Component} from "react";
import logo from './purplelogo.png';
import './App.css';
import Subject from './components'
import Session from './components'
let baseURL = 'process.env.REACT_APP_BACKEND_URL'
// baseURL = 'http://localhost:3000'

class App extends Component {

  loginUser = (e) => {
    e.preventDefault()
    fetch(baseURL + '/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.getActivities()
    })
  }

  render() {
    return (
     <div id="idxContent">
        <div id="nav">
          <div id="logo"><img src={logo} alt="Digital TA Logo" className="logo"/></div>
        </div>
        <div className="dateContainer">
          <div id= "date" className="date">Date</div>
        </div>
           <Session loginUser={this.loginUser} register={this.register}/>
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
