import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Student from './components/Student';
import Crypto from './components/crypto';
import Grades from "./components/Grades";
import Teacher from './components/Teacher';
// import TeacherLogin from './components/TeacherLogin';
import Navbar from'./components/CustomNavbar';
import Auth from './components/AuthService';
import Login from './components/Login';
import SubjectSearch from './components/Dropdown';
import SubjectSearchSmall from './components/SubjectDropdown';





class App extends Component{

  render() {
    return (
      <Router>
<div>
  <Navbar />
  <Route exact path ="/" component ={Home}/>
  <Route path ="/Student" component ={Student}/>
  {/* <Route path ="/StudentLogin" component ={Student}/> */}
  {/* <Route path ="/Crypto" component ={Crypto}/> */}
  <Route path ="/Grades" component ={Grades}/>
  <Route path ="/Teacher" component ={Teacher}/>
  {/* <Route path = "/TeacherLogin"component = {TeacherLogin}/>
  */}
  </div>
    </Router>
    );
  }
}

export default App;
