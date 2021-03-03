import React from 'react';
import '../App.css';
import '../Boards/Boards.css';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import BottomNav from '../BottomNav/BottomNav';
import * as IoIcons from 'react-icons/io';

function noteboard_01() {
  return (
    <div>
        <Link className="backButton" to="/">
            <IoIcons.IoMdArrowRoundBack />
        </Link>
        <h3>Notes</h3>
        <CardGroup className="allNotes"> {/** className to change all notes */}
          <Link to="/notes/note_01">
            <Card id="Note1"> {/* to change individal notes */}
              <Card.Body>
                <Card.Title className="NoteTitles">Note 1</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/notes/note_02">
            <Card id="Note2">
              <Card.Body>
                <Card.Title className="NoteTitles">Note 2</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </CardGroup>
        <div id="notes_search_form">
      </div>
          <BottomNav/>

    </div>
  );
}

export default noteboard_01;