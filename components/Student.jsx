import React, { Component } from 'react';
import AuthService from"./AuthService";
import SubjectSearchSmall from './SubjectDropdown';

export default class Student extends Component {
    render() {
        return (            
           <ul>
                
               <li> <SubjectSearchSmall /></li>
               </ul>
                
        )
    }
}
