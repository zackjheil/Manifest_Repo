import './App.css';
import './Boards/Boards.css';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Main() {
    return(
      <div className="Main">
          <CardGroup className="allBoards"> {/* this is the classname to use to change all of the Boards */}
          <Link to="/noteboards/noteboard_01">
            <Card id="Board1"> {/* the card ID's is what you are looking at to change individual Boards */}
              <Card.Body>
                <Card.Title className="BoardTitles">Board 1</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/noteboards/noteboard_01">
            <Card id="Board2">
              <Card.Body>
                <Card.Title className="BoardTitles">Board 2</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/noteboards/noteboard_01">
            <Card id="Board3">
              <Card.Body>
                <Card.Title className="BoardTitles">Board 3</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/noteboards/noteboard_01">
            <Card id="Board4">
              <Card.Body>
                <Card.Title className="BoardTitles">Board 4</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </CardGroup>
      </div>
    );

}

export default Main;
