import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';
import Boards from '../Boards/Boards';
import BottomNav from '../BottomNav/BottomNav';

function noteboard_01() {
  return (
    <div>
        <h3>Notes</h3>
          <CardGroup className="CardGroup">
            <Link to="/notes/note_01"> 
              <Boards title="Note 1"/>
            </Link>
            <Link to="/notes/note_02"> 
              <Boards title="Note 2"/>
            </Link>
          </CardGroup>
        <div id="notes_search_form">
      </div>
      <BottomNav/>

    </div>
  );
}

export default noteboard_01;