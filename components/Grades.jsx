import React, { Component } from 'react';
import {Jumbotron, Grid , Row , Col, Image , Button, FormControl,Form } from 'react-bootstrap';
import SearchStudent from './StudentSearch';
                
class Grades extends Component {
   
   
   
    constructor(props) {
        super(props)

        // Define initial state
        this.state = {
            Subject: "",
            Grades: "",
            StudentsSSN: ""
            
        }
    }


    // Handler for changing state when user types into input field
    handleSubmit = function (evt) {
        evt.preventDefault()

        const newGradeInfo = {
            Subject: this.state.Subject,
            Grades: this.state.Grades,
            StudentsSSN: this.state.StudentsSSN
        }

        this.setState(prevState => ({
            Subject: "",
            Grades: "",
            StudentsSSN:""
        }))

        fetch("http://localhost:8088/students", {
          
        })
        .then(r => r.json())
        .then(StudentInfo => {
            this.setState(newGradeInfo)
            console.log(newGradeInfo)
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
                <form><center>
                    <input type ="text" val={this.state.StudentsSSN}
                        id="StudentsSSN"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter Students SSN"
                    />
                    <input type ="text" val={this.state.Subject}
                        id="Subject"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Subject"
                    />
                     <input type ="text" val={this.state.Grades}
                        id="Grades"
                        onChange={e =>this.handleFormFieldChange(e)}
                        placeholder="Enter Grades"
                    />
                <button>Search Student</button>
                </center></form>
               
                <Grid>
            <Jumbotron>
               
                <h1>
                    <center>Grades</center>
                    </h1>
                </Jumbotron>
                <center>
                <img src={('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&h=350')} /> </center>
                </Grid>
                
             

                    
                
        
             
               
            </div>
        );
    }
}

export default Grades;
