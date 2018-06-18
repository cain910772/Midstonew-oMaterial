import React, { Component } from "react";
import { Button, DropdownButton, Dropdown, DropdownToggle, DropdownMenu,ListGroup,ListGroupItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';
import SubjectsearchSmall from './SubjectDropdown';
import StemSearch from "./Stemdd";
// import SearchStudent from './StudentSearch';

class SubjectSearch extends Component {

    state = {
        MetaSubjectIds: []
    }

    componentDidMount() {
        fetch(" http://localhost:8088/MetaSubjectIds")
            // Must be explicit on how to parse the response
            .then(response => response.json())
            .then(apiMetaSubjectIds => {
                console.log(apiMetaSubjectIds);
                this.setState({
                    
                    MetaSubjectIds: apiMetaSubjectIds
                })
            })

    }

    // render() {
    //     return (

       

        render() {
            return (
              <DropdownButton title="List of Meta Subjects">
              <ul>
                  {this.state.MetaSubjectIds.map((apiMetaSubjectIds)=>
                 <li> <apisubjects href="#apisubjects">{apiMetaSubjectIds.label}</apisubjects></li>
                      
                    
                )}
              </ul>
              {/* <StudentSearch /> */}
              <StemSearch />
              </DropdownButton>
            )}
        }
    //        <DropdownButton className = "myButton" id="DropDownButton">
       
    //             {this.state.MetaSubjects.map(MetaSubject =>
    //                 <MetaSubject 
    //                 key = {MetaSubject.apiMetaSubjectId}
    //                 label = {MetaSubject.apilabel}/>
                    
                    
    // )} 
                
            //   </DropdownButton>
        
    
        
                       
    
            // )
        
    //     }
    // }


export default SubjectSearch