import React, {Component} from 'react';
import './BottomNav.css';
import AddSymbol from './add_symbol.svg';
import {OverlayTrigger} from 'react-bootstrap';
import Popover from '../Popover/Popover';

class BottomNav extends Component
{
    render()
    {
        return(
            <nav className="bottomNav">
                <div className="bottomContainer">
                    <a  className="bottomLink" href="/notes/note_01">Type something...</a>
                    <OverlayTrigger trigger="click" placement="top" overlay={Popover}>
                        <img className="bottomAdd" src={AddSymbol}/>
                    </OverlayTrigger>
                </div>
            </nav>
        )
    }
}

export default BottomNav;