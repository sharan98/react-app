import React from 'react';
import Axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import uuid from 'uuid';
import './Syllabus.css'

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";

class Syllabus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            syllabus: ''
        }
    }

    componentDidMount() {
        var courseCode = this.props.courseCode;
        Axios.get(API + "/department/course/syllabus?courseCode=" + courseCode)
        .then(res => {
          console.log('axios.get.then')
          console.log(res)
          this.setState({
            syllabus: res.data.body
          })
        })
        .catch(err => {
            console.log('axios.get.err');
            console.log(err);
        })
    }
    
    displaySyllabus() {
        var courses = [];
        console.log('==>displaySyllabus');
        console.log(this.state.syllabus);
        var syllabus = this.state.syllabus;
        if (syllabus === '') {
            return <div></div>
        }
        console.log(syllabus);
        console.log(syllabus[0].semester);
        return <div key={uuid.v1()}>
            <p><em>Course</em>: {syllabus[0].course}</p>
            <p><em>Semester</em>: {syllabus[0].semester}</p>
            <p><em>Syllabus</em>: {syllabus[0].syllabus}</p>
        </div>
    }

    render() {
        console.log("==> courseCode prop" + this.props.courseCode);
        
        return(
            <div className="syllabus">
                <h1>{this.props.courseCode}</h1>
                {/* <button >{this.state.name}</button> */}
                {/* {this.state.name} <br /> */}
                {this.displaySyllabus()}
            </div>
        )
    }
}

export default Syllabus;