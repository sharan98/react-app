import React from 'react';
import './course.css'

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.courseCode
        }
    }
    render() {
        return(
            <div className="course">
                {/* <button >{this.state.name}</button> */}
                {this.state.name} <br />
            </div>
        )
    }
}

export default Course;