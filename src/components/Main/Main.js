import React, {useEffect} from 'react';
import {Card,ListGroup, Nav, Container, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Tooltip from '../Tooltips/Tooltips';
import Localbase from 'localbase';
import * as ManiF from '../helpers.js';
import './Main.css'
import ManifestJingle from '../../assets/ManifestJingle.mp3';
import PlusButton from "../../assets/Buttons/AddButton.svg"
import DeleteButton from "../../assets/Buttons/DeleteButton.svg"
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
          <div >
            if(!localStorage["alertdisplayed"]) {
    alert("Your text")
    localStorage["alertdisplayed"] = true
}
            <audio
            autoPlay={true}>
              <source type="audio/mp3" src={ManifestJingle}/>
            </audio>
            <Container>
            <div >
              <Tooltip content="These are your boards!">
                <h1 className="titleText">
                  Boards
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
                  <Card id={a.id}  className="Cards">
                  <LinkContainer to={`${a.title}`}>
                      <Card.Body onClick={() => {setNotes(a.notes)
                      setIde(a.id)
                      setBoardTitle(a.title)}}>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  </LinkContainer>
                  <button className="deleteButton" onClick={() =>{ManiF.deleteBoardFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                  </Card>
                )
                
                })}
                
              
              <button className="addButton"><img src={PlusButton} alt="Add" onClick={addBoardToDB} /></button>
              
            </Container>
          </div>
        );
    }


export default mainpage;