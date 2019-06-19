import React from 'react';
import Axios from 'axios';
import Department from './components/department/Department'
import './App.css';

const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";

class App extends React.Component {
  state = {
    names: []
  }
  componentDidMount() {
    Axios.get(API + "/department")
    .then(res => {
      console.log('axios.get.then')
      console.log(res)
      this.setState({
        names: res.data.body
      })
    })
  }
  render() {
    var depts = [];
    this.state.names.forEach(name => {
      depts.push(<Department name={name} />)
    })
    return (
      <div className="App">
        {/* <Department name={this.state.names}/> */}
        {depts}
      </div>
    );
  }
}

export default App;
