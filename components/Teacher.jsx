import React, { Component } from "react";
import "./Teacher.css";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu,Form,FormControl } from 'react-bootstrap';
import SubjectSearch  from './Dropdown';
import SubjectSearchSmall  from './SubjectDropdown';
import StudentSearch from "./StudentSearch";
// import StudentSearch from"./component/StudentSearch";


export class Teacher extends Component {
   
   
   
    constructor(props) {
        super(props)

        // Define initial state
        this.state = {
            firstName: "",
            lastName: "",
            StudentsSSN: ""
            
        }
    }


    // Handler for changing state when user types into input field
    handleSubmit = function (evt) {
        evt.preventDefault()

        const newStudentInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            StudentsSSN: this.state.StudentsSSN
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            StudentsSSN:""
        }))

        fetch("http://localhost:8088/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudentInfo)
        })
        .then(r => r.json())
        .then(newStudentInfo => console.log(newStudentInfo))

    }.bind(this)

    // Handler for changing state when user types into input field
    handleFormFieldChange =  e => {
     const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }


    render() {
        return (
            <div>
                <center>
                <form className="NewStudentForm" onSubmit={this.handleSubmit}>
                    <input type ="text" val={this.state.firstName}
                        id="firstName"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter students first name"
                    />
                    <input type ="text" val={this.state.lastName}
                        id="lastName"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter students last name"
                    />
                    <input type ="text" val={this.state.StudentsSSN}
                        id="StudentsSSN"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter Students SSN"
                    />
           
             
                    <button>Add New Student</button>
                </form>
                </center>
                <SubjectSearchSmall />
               </div>
            
        );
    }
}

export default Teacher;