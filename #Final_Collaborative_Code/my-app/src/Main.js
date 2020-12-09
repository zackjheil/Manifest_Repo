import './App.css';
import React, {Component} from 'react';
import MenuBar from './MenuBar/MenuBar';
import Boards from './Boards/Boards';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Main() {
    return(
      <div className="Main">
        <MenuBar />
        <CardGroup className="CardGroup">
            <Link to="/noteboards/noteboard_01">
                <Boards title="Board 1"/>
            </Link>
            <Link to="/noteboards/noteboard_01">
                <Boards title="Board 2"/>
            </Link>
            <Link to="/noteboards/noteboard_01">
                <Boards title="Board 3"/>
            </Link>
            <Link to="/noteboards/noteboard_01">
                <Boards title="Board 4"/>
            </Link>
        </CardGroup>
      </div>

    );

}

export default Main;
