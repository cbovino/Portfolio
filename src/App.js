import React from 'react';
import { About } from './components/About.js'
import { Home } from './components/Home.js'
import { Contact } from './components/Contact.js'
import { Navbar, Nav, Container} from 'react-bootstrap'
import Resume from './img/Connor_Bovino_Resume.pdf'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App(props) {
  return (
    <div>
      <Container>
      <Navbar collapseOnSelect className= "nav" expand="lg">
        <Navbar.Brand> <a className="itemA">Connor Bovino</a></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a className="item" href={Resume} target = "_blank" rel="noopener noreferrer">Resume</a>
            <a className="item">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
      </Container>
    </div>

  );
}

export default App;
