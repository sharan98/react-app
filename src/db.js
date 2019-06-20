import Axios from 'axios';
const API = "https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test";

export default makeAPICall = (jsonValue) => {
  const department = jsonValue.department,
        courseCode = jsonValue.courseCode;
  
  if (department === '') {
    Axios.get(API + "/department")
    .then(res => {
      console.log('axios.get.then')
      console.log(res)
      return res.data.body
    })
  } else if (courseCode == '') {
    Axios.get(API + "/department/course?department=" + department)
    .then(res => {
      console.log('axios.get.then')
      console.log(res)
      return res.data.body
    })
  } else {
    Axios.get(API + "/department/course/syllabus?courseCode=" + courseCode)
    .then(res => {
      console.log('axios.get.then')
      console.log(res)
      return res.data.body
    })
  }
}