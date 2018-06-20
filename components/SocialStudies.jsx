import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class SocialStudies extends Component{
    constructor(props) {
        super(props);
    

    this.state ={ListFilter4: [],
    }}
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            .then(response => response.json())
            .then(ApiSubjectsId => {
            this.setState({
                    ListFilter1: ApiSubjectsId
                   

                })
                
            })
    }

    render() {
        const ListFilter4= this.state.ListFilter4
            .filter(function (ListFilter4) { return ListFilter4.MetaSubjectId === 400;  console.log(ListFilter4);})
      
    return(
       <DropdownButton id= "SocialStudies" title ="SocialStudies">
     {this.props.ListFilter4}
     hello
     
       </DropdownButton>


    )
}
}


export default SocialStudies;
