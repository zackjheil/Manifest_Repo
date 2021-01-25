import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Menubar_notes from '../Menubar_notes/Menubar_notes';
import { CardGroup } from 'react-bootstrap';
import Boards from '../Boards/Boards';

function noteboard_01() {
  return (
    <div>
        <Menubar_notes />
        <h3>Notes</h3>
          <CardGroup className="CardGroup">
            <Link to="/notes/note_01"> 
              <Boards title="Note 1"/>
            </Link>
            <Link to="/notes/note_02"> 
              <Boards title="Note 2"/>
            </Link>
            <Link to="/"> 
              <h4>Back</h4>
            </Link>
          </CardGroup>
        <div id="notes_search_form">
        <form>
            <input type="text" paceholder="Type something..." name="search"></input>
            <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default noteboard_01;