import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class Stem extends Component{
    constructor(props) {
        super(props);
    

    this.state ={ListFilter1: [],
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
        const ListFilter1= this.state.ListFilter1
            .filter(function (ListFilter1) { return ListFilter1.MetaSubjectId === 1;  console.log(ListFilter1);})

    return(
       <DropdownButton id= "Stem" title ="Stem">
     
       </DropdownButton>


    )
}
}


export default Stem;
