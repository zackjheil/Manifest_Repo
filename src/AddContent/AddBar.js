import React, {Component} from 'react';
import './AddBar.css';

class AddBar extends Component
{
    render()
    {
        return(
            <nav className="addBar">
                <a href="/" className="popOption">Option</a>
                <a href="/" className="popOption">Option</a>
                <a href="/" className="popOption">Option</a>
                <a href="/" className="popOption">Option</a>
            </nav>
        )
    }
}

export default AddBar;