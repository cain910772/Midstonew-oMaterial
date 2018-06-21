import React, { Component } from 'react';
import AuthService from"./AuthService";
import SubjectSearchSmall from './SubjectDropdown';

export default class Student extends Component {
    render() {
        return (            
           <div>
          {/* <Image src = {('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=350')} thumbnail className ="profile-pic"/> */}
          
           <ul>
                
               <li> 
               
                <SubjectSearchSmall /></li>
               </ul>
                </div>
        )
    }
}
