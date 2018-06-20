import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
import SubjectsearchSmall from './SubjectDropdown';


class LanguageArts extends Component{
    constructor(props) {
        super(props);
    

    this.state ={ListFilter3: [],
    }}
    componentDidMount() {
        fetch(" http://localhost:8088/Subjects")
            // Must be explicit on how to parse the response
            .then(response => response.json())
            .then(apisubjects => {
                console.log(apisubjects);
                
                this.setState({
                    Subjects: apisubjects
                    })
            })

    }

    render() {
        const result =
        this.state.ListFilter3.filter(Subjects=>
            this.state.MetaSubjectId ===400)
        return (
          <DropdownButton title="Language Arts">
          <ul>
             {/* {this.state.map(Subjects)} */}
             {/* <li> <apisubjects href="#apisubjects">{Subject.subject}</apisubjects></li>
                   */}
                
            )}
          </ul>
          </DropdownButton>
        )}
    }

export default LanguageArts;
