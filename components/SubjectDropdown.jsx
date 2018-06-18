import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import StemSearch from "./Stemdd";


class SubjectsearchSmall extends Component {
constructor(props){
super (props)

    this.state = {
    Subjects:[],
      ListFilter1:[],
      ListFilter2:[],
      ListFilter3:[],
      ListFilter4:[],
      ListFilter5:[],
     
      
    }
}
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            .then(response => response.json())
            .then(ApiSubjects => {
                console.log(ApiSubjects);
               
                this.setState({
                    Subjects:ApiSubjects
                    })
            })
        }
    

    render() {
        const ListFilter1 = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===1;})
        {this.props.ListFilter1}
        
        const ListFilter2 = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===2;})
        const ListFilter3 = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===3;})
        const ListFilter4 = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===4;})
        const ListFilter5 = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===5;})
       console.log(ListFilter3);
    
        return ( 
           <div></div>
         ) }
        
        
      }     
    
           
           
   
  
export default SubjectsearchSmall;
