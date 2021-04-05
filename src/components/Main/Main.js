import React, {useEffect} from 'react';
import {Card,ListGroup, Nav, Container, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Tooltip from '../Tooltips/Tooltips';
import Localbase from 'localbase';
import * as ManiF from '../helpers.js';
let db = new Localbase('Mani')

const mainpage = ({notebook,setNotebook,setBoardTitle,setNotes,setIde}) => {

  function addBoardToDB(){
    var n= notebook.length+1
    notebook.push({
        id: n,
        title: 'Board '+ n,
        notes:[]
    })
    db.collection('boards').set(notebook)
}


function getBoards(db) {
      db.collection('boards').get().then(arr=>{
        setNotebook(arr)
    })
}


useEffect(() => {
    const interval=setInterval(() => {
      getBoards(db);  
    }, 500);
    return() =>clearInterval(interval)
  }, []);
        
  
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
            {/*------------------------------}
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
  */}
            {notebook.map((a)=>{
                return(
                  <Card id={a.id} className="Cards">
                  <LinkContainer to={`${a.title}`}>
                      <Card.Body onClick={() => {setNotes(a.notes)
                      setIde(a.id)
                      setBoardTitle(a.title)}}>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  </LinkContainer>
                  <button onClick={() =>{ManiF.deleteBoardFromDB(a.id)}}>Delete Button</button>
                  </Card>
                )
                
                })}
              <Button onClick={addBoardToDB} variant="info" type="submit">Add Board</Button>
            </Container>
          </div>
        );
    }


export default mainpage;