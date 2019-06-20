import React from 'react';
import Axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import uuid from 'uuid';
import './Department.css'

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";

class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: props.name
            deptNames: []
        }
    }
    
    componentDidMount() {
        console.log('==> Department mounted');
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
        console.log('==>displayDepts');
        
        console.log(this.state.deptNames);
        
        this.state.deptNames.forEach(element => {
          depts.push(<p key={uuid.v1()}><Link to={`/dept/${element}`} className="link">{element}</Link></p>)
        });
        return depts;
    }
        
    render() {
        return(
            <div className="department">
                <h1>Departments</h1>
                {/* <button >{this.state.name}</button> */}
                {/* {this.state.name} <br /> */}
                {this.displayDepts()}
            </div>
        )
    }
}

export default Department;