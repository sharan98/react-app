import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    }
    
    displaySyllabus() {
        var courses = [];
        console.log('==>displaySyllabus');
        console.log(this.state.syllabus);
        var syllabus = JSON.stringify(this.state.syllabus);
        return <p key={uuid.v1()}>{syllabus}</p>
    }

    render() {
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