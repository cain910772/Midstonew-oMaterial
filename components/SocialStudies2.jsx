import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownButtonProps, MenuItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom'
import SubjectSearch from "./Dropdown";
// import SubjectsearchSmall from './SubjectDropdown';



class SocialStudies2 extends Component {
    constructor(props) {
        super(props);



        this.state = {
            Subjects: [],
            // MenuItemstFilter4:[],
            FinalFilter: []
        }
    }
    componentDidMount() {

        fetch(" http://localhost:8088/Subjects")
            // Must be expMenuItemcit on how to parse the response
            .then(response => response.json())
            .then(apisubjects => {
                let Filtered = apisubjects.filter(subjects => {

                    return subjects.MetaSubjectId === 400;
                    
                    
                         })
                         this.setState({ Subjects: Filtered })
                         console.log(apisubjects)
                
                // this.setState({
                //     Subjects: apisubjects
                // });





            }

            )
    }
    render() {



        return (
            
            <DropdownButton title="Social Studies">

                {this.state.Subjects.map(subject =>(
                 <MenuItem eventKey={subject.id}>{subject.subject}</MenuItem>



                

                   
                )          
         )}




            </DropdownButton>
          
        )
    }
}



export default SocialStudies2


