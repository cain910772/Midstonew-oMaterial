import React, { Component } from 'react';
import {Jumbotron, Grid , Row , Col, Image , Button, FormControl,Form } from 'react-bootstrap';
import SearchStudent from './StudentSearch';
                

export default class Grades extends Component {
    render() {
        return (            
            <Grid>
            <Jumbotron>
                <h1>
                    <center>Grades</center>
                    </h1>
                </Jumbotron>
                <img src={('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&h=350')} />
                </Grid>
        )
    }
}

