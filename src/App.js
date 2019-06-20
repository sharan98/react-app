import React from 'react';
import Axios from 'axios';
import uuid from 'uuid';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Department from './components/department/Department'
import Course from './components/course/Course'
import Syllabus from './components/syllabus/Syllabus'
import './App.css';

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="app">
      <Router>
        {/* <Department /> */}
        <Route exact path="/" render={() => 
          <Department />
        }
        />
        <Route exact path="/dept/:deptName" render={({match}) =>
          <Course dept={match.params.deptName} />
        }
        />
        <Route exact path="/:deptName/course/:courseCode" render={({match}) => 
          <Syllabus courseCode={match.params.courseCode} />
        }
        />
      </Router>
      </div>
    )
  }
}

