import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid , Row , Col, Image , Button ,Form, FormControl,FormGroup,ControlLabel } from 'react-bootstrap';
import "./Teacher.css";


 class StudentSearch extends Component {
   
   
   
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
          
        })
        .then(r => r.json())
        .then(StudentInfo => {
            this.setState(StudentInfo)
        })

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
                <form>
                    <input type ="text" val={this.state.StudentsSSN}
                        id="StudentsSSN"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter Students SSN"
                    />
             

                    <button>Search Student</button>
                </form>
        
             
               
            </div>
        );
    }
}

export default StudentSearch;