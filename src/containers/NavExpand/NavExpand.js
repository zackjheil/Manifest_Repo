import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import ManiLogo from "../../assets/Manifest_Logo.svg";
import BoardsButton from "../../assets/Boards_Icon.svg";
import SettingsButton from "../../assets/Settings_Icon.svg";
import InfoButton from "../../assets/Info_Icon.svg";
import PlusButton from "../../assets/Buttons/AddButton.svg";
import './NavExpand.css';

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
                <Navbar.Brand className="navTitle" href="/"><h1 className="h1Title">Manifest <img src={ManiLogo} alt="Add" style={{width:74, height:74, marginLeft: 0}}/></h1> </Navbar.Brand>      
            </Navbar>
            <nav className={this.state.showSidebar ? "sideNav active" : "sideNav"}>
                <div className="navigation">
                    <p className="navToggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={this.showNav}/>
                        </Link>
                    </p>

                    <center><p> <img src={ManiLogo} alt="Add" style={{width:100, height:100, marginLeft: 0}}/> </p></center>

                    {/* *** This path for home, should be /Manifest_Repo/#/ */}
                    <p className="navLinks">
                        <Link to="/"> <img src={BoardsButton} alt="Add" style={{width:34, height:34, marginLeft: 0}}/> Boards </Link>
                    </p>

                    {/* *** This path for home, should be /Manifest_Repo/#/About */}
                    <p className="navLinks">
                        <Link to="/About"> <img src={InfoButton} alt="Add" style={{width:34, height:34, marginLeft: 0}}/> About</Link>
                    </p>
            
                    {/* *** This path for home, should be /Manifest_Repo/#/settings */}
                    <p className="navLinks">
                        <Link to="/settings"> <img src={SettingsButton} alt="Add" style={{width:34, height:34, marginLeft: 0}}/> Settings</Link>
                    </p>
                </div>
            </nav>
        </div>
        )
    }
}
export default NavExpand;
