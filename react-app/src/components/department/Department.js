import React from 'react';
import './Department.css'

class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }
    render() {
        return(
            <div className="department">
                {/* <button >{this.state.name}</button> */}
                {this.state.name} <br />
            </div>
        )
    }
}

export default Department;