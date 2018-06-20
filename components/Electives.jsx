import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class Electives extends Component{
    constructor(props) {
        super(props);
    

    this.state ={ListFilter5: [],
    }}
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            .then(response => response.json())
            .then(ApiSubjectsId => { console.log(ApiSubjectsId);
            
            this.setState({
                    ListFilter5: ApiSubjectsId
                   

                })
                
            })
    }

    render() {
        const ListFilter5 = this.state.ListFilter5

    return(
       <DropdownButton id= "Electives" title ="Electives">
     
       </DropdownButton>


    )
}
}


export default Electives;
