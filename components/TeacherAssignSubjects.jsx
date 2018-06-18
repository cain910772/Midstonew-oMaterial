import React, { Component } from "react";
import "./Teacher.css";


export class TeacherAssignSubjects extends Component {
    constructor(props) {
        super(props)

        // Define initial state
        this.state = {
            ClassId: "",
            className: "",
            StudentsSSN: ""
            
        }
    }


    // Handler for changing state when user types into input field
    handleSubmit = function (evt) {
        evt.preventDefault()

        const newClassInfo = {
            ClassId: this.state.ClassId,
            className: this.state.className,
            StudentsSSN: this.state.StudentsSSN
        }

        this.setState(prevState => ({
            ClassId: "",
            className: "",
            StudentsSSN:""
        }))

        fetch("http://localhost:8088/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClassInfo)
        })
        .then(r => r.json())
        .then(newClassInfo => console.log(newClassInfo))

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
                
                <form className="NewStudentForm" onSubmit={this.handleSubmit}>
                
                <input type ="text" val={this.state.StudentSSN}
                        id="StudentSSN"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter Students SSN"
                    />
             
                    <input type ="text" val={this.state.ClassId}
                        id="ClassId"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter New Class Id"
                    />
                    <input type ="text" val={this.state.className}
                        id="className"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter New Class Name"
                    />
                 

                    <button>Add New Class</button>
                </form>
            </div>
        );
    }
}

export default TeacherAssignSubjects;