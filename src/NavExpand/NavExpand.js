import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavExpand.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'


class NavExpand extends Component
{
   constructor (props){
        super(props);
        this.state = {
            showSidebar: false
        }
    this.showNav=this.showNav.bind(this);
    }
    showNav(){
        if(this.state.showSidebar===false)
        {
            this.setState(
                {
                    showSidebar: true
                }
            )
        }
        else if(this.state.showSidebar===true){
            this.setState(
                {
                    showSidebar: false
                }
            )
        }
    }
    render()
    {
        return(
            <div>
            <Navbar class="navbar sticky-top" collapseOnSelect expand="menuButton" className="navExpand">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={this.showNav}/>
                </Link>
                <Navbar.Brand className="navTitle" href="/">Manifest</Navbar.Brand>      
            </Navbar>
            <nav className={this.state.showSidebar ? "sideNav active" : "sideNav"}>
            <ul className="navigation">
                <li className="navToggle">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={this.showNav}/>
                    </Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Profile</Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Main</Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Emotions Log</Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Settings</Link>
                </li>
            </ul>
            </nav>
        </div>
        )
    }
}
export default NavExpand;