import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class LifeSkills extends Component{
    constructor(props) {
        super(props);
    

    this.state ={ListFilter2: [],
    }}
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            .then(response => response.json())
            .then(ApiSubjectsId => {
            this.setState({
                    ListFilter2: ApiSubjectsId
                   

                })
                
            })
    }

    render() {
        const ListFilter2 = this.state.ListFilter2
            .filter(function (ListFilter2) { return ListFilter2.MetaSubjectId === 2;  console.log(ListFilter2);})

    return(
       <DropdownButton id= "LifeSkills" title ="LifeSkills">
     
       </DropdownButton>


    )
}
}


export default LifeSkills;
