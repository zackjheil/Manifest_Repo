import React, {Component} from 'react';
import '../App.css';
//import {HiMenu, HiUserCircle} from 'react-icons/hi';//

class MenuOPS extends Component {
    render()
    {
        return (
                <ul cLass="dropdownMenu">
                    <li className="MenuOp"><h1> Home </h1></li>
                    <li className="MenuOp"><h1> Profile </h1></li>
                    <li className="MenuOp"><h1> Options </h1></li>
                    <li className="MenuOp"><h1> TEXT </h1></li>
                    <li className="MenuOp"><h1> TEXT </h1></li>
                    <li className="MenuOp"><h1> TEXT </h1></li>
                </ul>
        )
    }
}
export default MenuOPS;

