(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},41:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(33),c=a.n(s),l=(a(41),a(6)),r=a(7),u=a(9),i=a(8),p=a(10),m=a(12),d=a.n(m),h=a(13),b=a.n(h),y=a(14),f=a(11),v=(a(61),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={deptNames:[]},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("==> Department mounted"),d.a.get("https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test/department").then(function(t){console.log("axios.get.then"),console.log(t),e.setState({deptNames:t.data.body})})}},{key:"displayDepts",value:function(){var e=[];return console.log("==>displayDepts"),console.log(this.state.deptNames),this.state.deptNames.forEach(function(t){e.push(o.a.createElement("p",{key:b.a.v1()},o.a.createElement(y.b,{to:"/dept/".concat(t),className:"link"},t)))}),e}},{key:"render",value:function(){return o.a.createElement("div",{className:"department"},o.a.createElement("h1",null,"Departments"),this.displayDepts())}}]),t}(o.a.Component)),g=(a(66),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={courseCodes:[]},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dept;d.a.get("https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test/department/course?department="+t).then(function(t){console.log("axios.get.then"),console.log(t),e.setState({courseCodes:t.data.body})})}},{key:"displayCourses",value:function(){var e=[];console.log("==>displayCourses"),console.log(this.state.courseCodes);var t=this.props.dept;return this.state.courseCodes.forEach(function(a){e.push(o.a.createElement("p",{key:b.a.v1()},o.a.createElement(y.b,{to:"/".concat(t,"/course/").concat(a.courseCode),className:"link"},a.courseCode)))}),e}},{key:"render",value:function(){return o.a.createElement("div",{className:"course"},o.a.createElement("h1",null,this.props.dept),this.displayCourses())}}]),t}(o.a.Component)),E=(a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={syllabus:""},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.courseCode;d.a.get("https://gublze4aq4.execute-api.us-east-2.amazonaws.com/test/department/course/syllabus?courseCode="+t).then(function(t){console.log("axios.get.then"),console.log(t),e.setState({syllabus:t.data.body})}).catch(function(e){console.log("axios.get.err"),console.log(e)})}},{key:"displaySyllabus",value:function(){console.log("==>displaySyllabus"),console.log(this.state.syllabus);var e=this.state.syllabus;return""===e?o.a.createElement("div",null):(console.log(e),console.log(e[0].semester),o.a.createElement("div",{key:b.a.v1()},o.a.createElement("p",null,o.a.createElement("em",null,"Course"),": ",e[0].course),o.a.createElement("p",null,o.a.createElement("em",null,"Semester"),": ",e[0].semester),o.a.createElement("p",null,o.a.createElement("em",null,"Syllabus"),": ",e[0].syllabus)))}},{key:"render",value:function(){return console.log("==> courseCode prop"+this.props.courseCode),o.a.createElement("div",{className:"syllabus"},o.a.createElement("h1",null,this.props.courseCode),this.displaySyllabus())}}]),t}(o.a.Component)),C=(a(68),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(y.a,null,o.a.createElement(f.a,{exact:!0,path:"/",render:function(){return o.a.createElement(v,null)}}),o.a.createElement(f.a,{exact:!0,path:"/dept/:deptName",render:function(e){var t=e.match;return o.a.createElement(g,{dept:t.params.deptName})}}),o.a.createElement(f.a,{exact:!0,path:"/:deptName/course/:courseCode",render:function(e){var t=e.match;return o.a.createElement(E,{courseCode:t.params.courseCode})}})))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.fea8abfa.chunk.js.map