import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import StemSearch from "./Stemdd";
import SocialStudies2 from "./SocialStudies2";
import LifeSkills from "./LifeSkills";
import LanguageArts from "./LanguageArts";
import Electives from "./Electives";
class SubjectsearchSmall extends Component {
   

        state = {
            Subjects: []
           
        }
  
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            .then(response => response.json())
            .then(ApiSubjects => {
                // console.log(ApiSubjects);
            this.setState({
                    Subjects: ApiSubjects
                })
            })
    }


    render() {
        const ListFilter1 = this.state.Subjects
            .filter(function (Subjects) { return Subjects.MetaSubjectId === 100; 
            })

        const ListFilter2 = this.state.Subjects
            .filter(function (Subject) { return Subject.MetaSubjectId === 200; })
        const ListFilter3 = this.state.Subjects
            .filter(function (Subject) { return Subject.MetaSubjectId === 300; })
        
        const ListFilter5 = this.state.Subjects
            .filter(function (Subject) { return Subject.MetaSubjectId === 500; })
           console.log(ListFilter1);console.log(ListFilter2);console.log(ListFilter3);
           console.log(ListFilter5);
        return (
<div >
           <center> 
     <SocialStudies2 /> 
     < StemSearch />
     <LifeSkills />
     < LanguageArts />
     < Electives />
                    <h3>Add New Classes</h3>
                    </center>
                 
                    </div>
                    )
           }
        }
    
       
    
       
       export default SubjectsearchSmall;
