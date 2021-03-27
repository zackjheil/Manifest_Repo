import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import './NavExpand.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


class NavExpand extends Component {
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
            <Navbar collapseOnSelect expand="menuButton" className="navExpand">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={this.showNav}/>
                </Link>
                <Navbar.Brand className="navTitle" href="/">Notes</Navbar.Brand>      
            </Navbar>
            <nav className={this.state.showSidebar ? "sideNav active" : "sideNav"}>
            <ul className="navigation">
                <li className="navToggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose onClick={this.showNav}/>
                    </Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Main</Link>
                </li>
                <li className="navLinks">
                    <Link to="/newnote">New</Link>
                </li>
                <li className="navLinks">
                    <Link to="/boards">Boards</Link>
                </li>
                <li className="navLinks">
                    <Link to="/">Feelings</Link>
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