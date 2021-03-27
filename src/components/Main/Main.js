import React from 'react';
import {Card,ListGroup, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const mainpage = () => {
        return(
          <div>
            <Container>
            <h1>Notes</h1>
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