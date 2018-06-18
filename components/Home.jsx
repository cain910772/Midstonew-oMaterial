import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid , Row , Col, Image , Button } from 'react-bootstrap';
import './Home.css'
import AuthService from "./AuthService";




export default class Home extends Component {
    render() {
        return (            
            <Grid>
            <Jumbotron>
            <h2><center>Welcome to Student Tracker</center></h2>
            <center><p> Just testing</p></center>
                
                
                <Link to ="/Student">
                <Button bsStyle = "primary"> Student Login</Button>
                </Link>
                <Link to ="/Teacher">
                <Button bsStyle = "primary" className = "pull-right" >Teacher Login</Button>
                </Link>
                </Jumbotron>
             
                <Row className = "show grid text-center">
                <Col xs ={12} sm= {4} className = "person-wrapper">
                <Image src = "/images/andre.png" circle className ="profile-pic"/>
                <h3>Track Your Grades</h3>
                <p>Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. He's got style, a groovy style, and a car that just won't stop. When the going gets tough, he's really rough, with a Hong Kong Phooey chop (Hi-Ya!). Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. Hong Kong Phooey, he's fan-riffic!</p>
</Col>
<Col xs ={12} sm= {4} className = "person-wrapper">
                <Image src = "http://localhost:3000/images/books-library-students-12064.jpg" circle className ="profile-pic"/>
                <h3>See Upcoming Tests</h3>
                <p>Just the good ol' boys, never meanin' no harm. Beats all you've ever saw, been in trouble with the law since the day they was born. Straight'nin' the curve, flat'nin' the hills. Someday the mountain might get 'em, but the law never will. Makin' their way, the only way they know how, that's just a little bit more than the law will allow. Just good ol' boys, wouldn't change if they could, fightin' the system like a true modern day Robin Hood.</p>
</Col>
<Col xs ={12} sm= {4} className = "person-wrapper">
                <Image src = "http://localhost:3000/images/books-library-students-12064.jpg" circle className ="profile-pic"/>
                <h3>View Elective Credits</h3>
                <p>Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.</p>
                </Col>


<Col xs ={12} sm= {4} className = "person-wrapper">
                <Image src = "images/summer-office-student-work.jpg" circle className ="profile-pic"/>
                <h3>Check Your Wallet</h3>
                <p>Ten years ago a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government, they survive as soldiers of fortune. If you have a problem and no one else can help, and if you can find them, maybe you can hire the A-team.</p>
</Col>

</Row>
                </Grid>
        )}
}
