import React, {Component} from 'react';
import './Menu.css';
import {HiMenu, HiUserCircle} from 'react-icons/hi';


class Menu extends Component {
    render()
    {
        return(
            <menu className="Menu">
                
            <div className="menu-icon"><HiMenu/></div>
                <body className="menu-title">Menu</body>
                <div className="user"><HiUserCircle/></div>
                
            </menu>
        
        )
    }
}

export default Menu;