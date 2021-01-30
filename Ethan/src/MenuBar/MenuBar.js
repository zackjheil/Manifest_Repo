import React, {Component} from 'react';
//import {MenuOptions} from './MenuOptions';
import '../App.css';
import {HiMenu, HiUserCircle} from 'react-icons/hi';
import { Link } from 'react-router-dom';

class MenuBar extends Component
{
    render()
    {
        return(
            <menu className="MenuBar">
                <Link className="menuLink" to="/tempMenu/tempMenu"><HiMenu/></Link>
                <body className="menu-title">My Boards</body>
                <HiUserCircle className="user" />                
            </menu>
        )
    }
}

export default MenuBar