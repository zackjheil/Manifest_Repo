import React from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
//import note from './note.jpg';

const card = (props) => 
{
    return(
        <Card className="boards">
            <Card.Title>{props.title}</Card.Title>
        </Card>
    )
}

export default card