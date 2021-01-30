import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavExpand.css';
import "bootstrap/dist/css/bootstrap.min.css";

class NavExpand extends Component
{
    render()
    {
        return(
            <Navbar class="navbar sticky-top" collapseOnSelect expand="menuButton" className="navExpand">
                <Navbar.Brand className="navTitle" href="/">Manifest</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link className="navLinks" href="/">Profile</Nav.Link>
                        <Nav.Link className="navLinks" href="/">Main</Nav.Link>
                        <Nav.Link className="navLinks" href="/">Emotions Log</Nav.Link>
                        <Nav.Link className="navLinks" href="/">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavExpand;