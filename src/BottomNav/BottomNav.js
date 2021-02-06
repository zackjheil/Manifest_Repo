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
                    {/* OverlayTrigger is the actual trigger in order to make the popover appear
                    
                    !! You can change where the popover goes by editing "placement" either top, right, left, or bottom!!!*/}
                </div>
            </nav>
        )
    }
}

export default BottomNav;