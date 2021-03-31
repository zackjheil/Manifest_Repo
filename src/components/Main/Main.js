import React from 'react';
import {Card,ListGroup, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Tooltip from '../Tooltips/Tooltips';

const mainpage = () => {
        return(
          <div>
            <Container>
            <div>
              <Tooltip content="These are your notes!">
                <h1>
                  Notes
                </h1>
              </Tooltip>
            </div>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <LinkContainer to="/newnote">
                    <Nav.Link>New Note</Nav.Link>
                  </LinkContainer>
                </ListGroup.Item>
                <ListGroup.Item>
                  <LinkContainer to="/boards">
                    <Nav.Link>Boards</Nav.Link>
                      </LinkContainer>
                    </ListGroup.Item>
              </ListGroup>
            </Card>
            </Container>
          </div>
        );
    }


export default mainpage;