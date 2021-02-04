import React, {Component} from 'react';
import '../App.css';
import {HiUserCircle} from 'react-icons/hi';

const MenuOPS = () =>
{
    return(
        <div className="HamburgerMenu">
            <HiUserCircle className="menuUser"/>
            <a className="menulist" href="/">Main</a>
            <a className="menulist" href="/">Lists</a>
            <a className="menulist" href="/">Reminders</a>
            <a className="menulist" href="/">Emotions Log</a>
        </div>
    )
}

export default MenuOPS;