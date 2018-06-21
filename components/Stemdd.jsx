import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps, MenuItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
// import SubjectsearchSmall from './SubjectDropdown';



class Stem extends Component {
    constructor(props) {
        super(props);



        this.state = {
            Subjects: []
        }
    }
    componentDidMount() {

        fetch(" http://localhost:8088/Subjects")
            // Must be expMenuItemcit on how to parse the response
            .then(response => response.json())
            .then(apisubjects => {
                let Filtered = apisubjects.filter(subjects => {
                    return subjects.MetaSubjectId === 100;
                })
                this.setState({ Subjects: Filtered })
                console.log(apisubjects)
            }

            )
    }
    render() {



        return (

            <DropdownButton title="Stem">

                {this.state.Subjects.map(subject => (
                    <MenuItem eventKey={subject.id}>{subject.subject}</MenuItem>)
                )}
            </DropdownButton>

        )
    }
}



export default Stem


