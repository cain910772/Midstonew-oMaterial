import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";



class SubjectsearchSmall extends Component {

    state = {
       Subjects:[],
      ListFilter:[]
      
    }
    
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            // Must be explicit on how to parse the response
            .then(response => response.json())
            .then(apiSubjects => {
                console.log(apiSubjects);
               
                this.setState({
                    Subjects:apiSubjects
                    })
            })

    }
    render() {
        const ListFilter = this.state.Subjects
        .filter(function(Subject){return Subject.MetaSubjectId===1;})
       console.log(ListFilter);
        //   const stemFilter = this.state.listFilter
        //   .map(function(listFilter){return listFilter.stemFilter})
        //   console.log(listFilter)
        return (
            <DropdownButton title="List of Stem Subjects">
         
            {this.state.ListFilter}
             <ul>
             <li> <apimetasubjects 
                 key ={ListFilter.ListFilter}/></li>
                 </ul>
          
            
            </DropdownButton>
          )}
      }
export default SubjectsearchSmall;
