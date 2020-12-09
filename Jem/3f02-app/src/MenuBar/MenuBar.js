import React, {Component} from 'react';
//import {MenuOptions} from './MenuOptions';
import './MenuBar.css';
import {HiMenu, HiUserCircle} from 'react-icons/hi';

class MenuBar extends Component
{
    render()
    {
        return(
            <menu className="MenuBar">
                <div className="menu-icon"><HiMenu/></div>
                <body className="menu-title">My Boards</body>
                <div className="user"><HiUserCircle/></div>
                
            </menu>
        )
    }
}

export default MenuBar