import React from 'react';
import './Department.css'

class Department extends React.Component {
    render() {
        return(
            <div className="department">
                {this.props.name} <br />
            </div>
        )
    }
}

export default Department;