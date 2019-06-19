import React from 'react';
import Axios from 'axios';
import uuid from 'uuid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Department from './components/department/Department'
import Course from './components/course/Course'
import './App.css';

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";


export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      deptNames: [],
      courseCodes: [],
      syllabus: '',
      department: '',
      courseCode: ''
    }

  }
  
  componentDidMount() {
    Axios.get(API + "/department")
    .then(res => {
      console.log('axios.get.then')
      console.log(res)
      this.setState({
        deptNames: res.data.body
      })
    })
  }

  displayDepts() {
    var depts = [];
    this.state.deptNames.forEach(element => {
      depts.push(<Link to={`/dept/${element}`}><Department name={element} /></Link>)
    });
    
    return depts;
  }

  displayCourses() {
    var courses = [];
    var department = this.state.department;
    this.state.courseCodes.forEach(element => {
      courses.push(<Link to={`/${department}/course/${element}`}><Course name={element} /></Link>)
    })
    return courses;
  }


  render() {
    return(
      <Router>
        {this.displayDepts()}
        
      </Router>
    )
  }
}

