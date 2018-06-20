import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem } from 'react-bootstrap';



export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to ="/">Grade Tracker</Link>
                    </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                <NavItem eventKey ={0} componentClass = {Link} href="/" to ="/">
                                Home
                                </NavItem>
                                <NavItem eventKey ={1} componentClass = {Link} href="/Login" to ="/Login">
                                Login
                                </NavItem> 
                            
                                 <NavItem eventKey ={2} componentClass = {Link} href="/Student"to ="/Student">
                                Student 
                                  </NavItem> 
                                <NavItem eventKey ={3} componentClass = {Link} href ="/Grades" to ="/Grades">
                                Grades
                                </NavItem> 
                                  <NavItem eventKey ={4} componentClass = {Link} href="/Teacher" to ="/Teacher">
                                Teacher
                                </NavItem>
                                <NavItem eventKey ={5} componentClass = {Link} href ="Crypto" to ="/Crypto"> 
                                Crypto
                                </NavItem>
                                </Nav> 
                               </Navbar.Collapse> 
                                
                              </Navbar>

        )
    }
    }