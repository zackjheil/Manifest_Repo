import React, {useEffect} from 'react';
import {Card,Container} from 'react-bootstrap';
import './Boards.css';
import Localbase from 'localbase';

const Boards = ({ notes, setNotes }) => {

    let db = new Localbase('db');

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

    return (
        <div>
            <Container>
            {notes.map((note) => (
            <Card border="warning" className="cardBoard">
                    <Card.Body>
                    <i className="icon-trash float-right" onClick={() => deleteBoard(note.id, db)}></i>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.text}
                    </Card.Text>
                    </Card.Body>
            </Card>
            ))}
            </Container>
        </div>
    )
}

export default Boards;