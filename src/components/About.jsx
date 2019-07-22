import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
      <Container> 
        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/Chantelle.png" circle className="profile-pic"/>
            <h3>Chantelle Patel</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mi at leo suscipit venenatis.</p>
          </Col>
          <Col xs={12} sm={5} className="person-wrapper">
            <Image src="assets/Ashley.jpg" circle className="profile-pic"/>
            <h3>Ashley P. Walker</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mi at leo suscipit venenatis.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/Emmit.png" circle className="profile-pic"/>
            <h3>Emmit Parubrub</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mi at leo suscipit venenatis.</p>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
