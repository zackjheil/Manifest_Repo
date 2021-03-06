import React, {useEffect} from 'react';
import {Card,Container, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Boards.css';
import Localbase from 'localbase';
import PlusButton from "../../assets/Buttons/AddButton.svg";
import DeleteButton from '../../assets/Buttons/DeleteButton.svg';
let db = new Localbase('Mani');
db.config.debug = false;

const Boards = ({notes,ide,setNotes,boardtitle,setNoteId,setNoteele,setNoteTitle}) => {
  window.onbeforeunload = function() { 
    window.setTimeout(function () { 
        window.location = '/';
    }, 0); 
    window.onbeforeunload = null; 
  }


    
/*----------Professor Mauro's code if we need to fall back to it----------------
    function deleteBoard(id, db) {
        setNotes(notes.filter(n => n.id !== id))
        db.collection('dbnotes').doc({id:id}).delete()
    }


    function getBoards(db) {
        db.collection('dbnotes').get().then(dbnotes => {
            //console.log('dbnotes', dbnotes);
            setNotes(dbnotes)
        });
    }

    useEffect(() => {
        getBoards(db);
      }, []);   
--------------------------------------------------------------------------------*/
function addNoteToDB(ide, notes){
    var n=notes.length+1
    notes.push({
      id: n,
      title:'note '+ n,
      noteele:[]
    })
      db.collection('boards').doc({id:ide}).update({
      notes:notes
    })
  }
function deleteNoteFromDB(ide,notes,givenId){
        var n=notes.findIndex(a => a.id===givenId)
        
            notes.splice(n,1)
            {/*console.log(notes)*/}
      db.collection('boards').doc({id:ide}).update({
        notes:notes
      })
    }


function getNotes(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
          {/*console.log(doc)*/}
        if(doc){
        setNotes(doc.notes)
        }
      })
      }
      
function changeBoardTitle(event){
  var newTitle=event.target.value
        db.collection('boards').doc({id:ide}).update({
            title:newTitle
        })
       /* var newTitle=event.target.value
        notes.filter(note =>{
          if(note.id===noteId){
            note.title=newTitle
          }
        })
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })*/
      }





    return (
        <div className="appWidth">
            <Container>
            <textarea rows="1" className="Header" onChange={changeBoardTitle}>{boardtitle}</textarea>
            {/*----------Professor Mauro's code if we need to fall back to it----------------
            notes.map((note) => (
            <Card border="warning" className="cardBoard">
                    <Card.Body>
                    <i className="icon-trash float-right" onClick={() => deleteBoard(note.id, db)}></i>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.text}
                    </Card.Text>
                    </Card.Body>
            </Card>
            ))*/}
            <div id='notes'>
            {notes.map((a)=>{
                var linker=boardtitle+'/'+a.title // *** where does this path go? Should it be "/Manifest_Repo/Boards"? This represents username.github.io/ currently. 
                return(
                  <Card id={a.id} className="cardBoard">
                  <LinkContainer to={linker}>
                      <Card.Body onClick={() => {setNoteele(a.noteele)
                      setNoteId(a.id)
                      setNoteTitle(a.title)}}>
                          <Card.Title>{a.title}</Card.Title>
                      </Card.Body>
                  </LinkContainer>
                  <button className="deleteButton" onClick={() =>{deleteNoteFromDB(ide,notes,a.id)}}><img src={DeleteButton} alt="Delete"/></button>
                  </Card>
                )
                
                })}
            </div>
                 
                 <button className="addNote" onClick={()=>{addNoteToDB(ide,notes)}} onFocus={getNotes()} onvariant="info" type="submit"><img src={PlusButton} alt="Add"/></button>
            </Container>
        </div>
    )
}

export default Boards;