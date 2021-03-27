import React, {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import uniqid from 'uniqid';
import Localbase from 'localbase';

let db = new Localbase('db');
// Object { title: "", text: "", id: "" }

const Newnote = ({setNotes}) => {

    const [form, setForm] = useState({title: '', text: ''})
    const [id, setId] = useState(uniqid())

    function handleInputChange(event) {
        const {value, name} = event.target
        setForm({...form, [name]: value, id})
        //console.log(form)
    }

    function saveNote() {
        if (form.title !== '' || form.text !== ''){
            setNotes(note => [...note, form]);
            setId(uniqid());
            setForm({title:'', text:''});
            db.collection('dbnotes').add(form)
        }
    }

    //console.log(setNotes)
    return (
        <Container>
        <Form onSubmit={saveNote}>
            <Form.Group>
                <Form.Label>New Title</Form.Label>
                <Form.Control onChange={handleInputChange} 
                    value={form.title} as="textarea" 
                    rows={1} name="title" type="text" 
                    placeholder="Title" />
            </Form.Group>
            <Form.Group>
            <Form.Label>New Note</Form.Label>
            <Form.Control onChange={handleInputChange} 
                value={form.text} as="textarea" 
                rows={10} name="text" type="text" 
                placeholder="Note" />
            </Form.Group>
        </Form>
        <Button onClick={saveNote} variant="info" type="submit">
            Save
        </Button>
        </Container>
    )
}

export default Newnote;