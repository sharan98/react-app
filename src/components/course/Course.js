import React from 'react';
import Axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import uuid from 'uuid';
import './course.css'

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseCodes: []
        }
    }

    componentDidMount() {
        var department = this.props.dept;
        Axios.get(API + "/department/course?department=" + department)
        .then(res => {
            console.log('axios.get.then')
            console.log(res)
            this.setState({
                courseCodes: res.data.body
            })
        })
    }
    
    displayCourses() {
        var courses = [];
        console.log('==>displayCourses');
        console.log(this.state.courseCodes);
        var department = this.props.dept;
        
        this.state.courseCodes.forEach(element => {
          courses.push(<p key={uuid.v1()} ><Link to={`/${department}/course/${element.courseCode}`} className="link">{element.courseCode}</Link></p>)
        });
        return courses;
    }

    render() {
        return(
            <div className="course">
                <h1>{this.props.dept}</h1>
                {/* <button >{this.state.name}</button> */}
                {/* {this.state.name} <br /> */}
                {this.displayCourses()}
            </div>
        )
    }
}

export default Course;