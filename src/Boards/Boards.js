import React from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
//import note from './note.jpg';

const card = (props) => 
{
    return(
        <Card>
            <Card.Title>{props.title}</Card.Title>
            {/* ID's can be identified using # in the CSS file */}
        </Card>
    )
}

export default card