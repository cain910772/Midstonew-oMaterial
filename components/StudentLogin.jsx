import React, { Component } from "react"
import "./Login.css"
import Login from "./Login"
import {Jumbotron, Grid , Row , Col, Image , Button, FormControl,Form,Checkbox } from 'react-bootstrap';


class StudentLogin extends Component {
    state = {
        email:"",
        password:""

    }

render (){



return(
<div>
    <Login />
</div>
)
}
}

export default StudentLogin