import React from 'react';
import {Popover} from 'react-bootstrap';
import './Popover.css';

{/*THE CSS IS IN POPOVER.CSS DO NOT TRY TO FIND IT IN APP.CSS*/}

const popover =
(
    <Popover className="popNav">
        <Popover.Content>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            <a href="/" className="popOption">Option</a>
            {/* 
            - These pages obviously don't go anywhere but once we have more pages we can link them through our href links
            - I added class names to EVERYTHING so that the designers are able to edit these individually*/}
        </Popover.Content>
    </Popover>
);

export default popover;