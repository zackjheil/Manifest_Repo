import React, {Component} from 'react';
//import {MenuOptions} from './MenuOptions';
import '../App.css';
import {HiMenu, HiUserCircle} from 'react-icons/hi';


class MenuBar extends Component
{
    render()
    {
        return(
            <menu className="MenuBar">
                <HiMenu className="menuLink" />
                <body className="menu-title">Board 01</body>
                <HiUserCircle className="user" />                
            </menu>
        )
    }
}

export default MenuBar