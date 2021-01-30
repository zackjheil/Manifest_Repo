import React, {Component} from 'react';
import './BottomNav.css';

class BottomNav extends Component
{
    render()
    {
        return(
            <nav className="bottomNav">
                <div className="bottomContainer">
                    <a  className="bottomLink" href="/notes/note_01">Type something...</a>
                </div>
            </nav>
        )
    }
}

export default BottomNav;