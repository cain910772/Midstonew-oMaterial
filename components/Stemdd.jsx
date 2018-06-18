import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class StemSearch extends Component{
render() {
    return(
        <DropdownButton id = {"This-Button"} title = {"Stem Classes"}>
        {this.props.ListFilter1}
        </DropdownButton>
    )
}
}

export default StemSearch;
