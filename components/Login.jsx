import React, { Component } from "react"
import "./Login.css"


 class Login extends Component {

    // Set initial state
    state = {
        lastName: "",
        StudentsSSN: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:8088/students?StudentsSSN=${this.state.StudentsSSN}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show home view
                if (user.StudentsSSN) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                // User doesn't exist
                } else {
                    // Create user in API
                    fetch("http://localhost:8088/students", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({elastName: this.state.lastName, StudentsSSN: this.state.StudentsSSN})
                    })

                    // Set local storage with newly created user's id and show home view
                    .then(newUser => {
                        this.props.setActiveUser(newUser.id)
                        this.props.showView("home")
                    })
                }

            })
    }.bind(this)


    /*
        TODO:
            - Add first name field
            - Add last name field
            - Add password verification field
    */
    render() {
        return (
            <form className="form-signin" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputlastName" className="sr-only">Last Names</label>
                <input onChange={this.handleFieldChange} type="lastName" id="lastName" className="form-control" placeholder="lastName address" required="" autoFocus="" />
                <label htmlFor="StudentsSSN" className="sr-only">Social Security Number</label>
                <input onChange={this.handleFieldChange} type="StudentsSSN" id="StudentsSSN" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" /> Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        )
    }
}
export default Login;