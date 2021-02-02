import React from 'react';
import {Popover} from 'react-bootstrap';
import './Popover.css';

const popover =
(
    <Popover className="popNav">
        <Popover.Content>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
        </Popover.Content>
    </Popover>
);

export default popover;