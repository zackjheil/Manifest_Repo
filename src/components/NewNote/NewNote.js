import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import uniqid from 'uniqid';
import Localbase from 'localbase';
import {Card} from 'react-bootstrap';
import * as ManiF from '../helpers.js';
import './NewNote.css'

let db = new Localbase('Mani');
// Object { title: "", text: "", id: "" }

const Newnote = ({ide,notes,setNote2,note2,noteId,setNotes,noteele,setNoteele,setIde}) => {
    /*----------Professor Mauro's code if we need to fall back to it----------------
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
--------------------------------------------------------------------------------*/



function addNoteEleToDB(){
    var n=noteele.length+1
      db.collection('boards').doc({id:ide}).get().then(doc =>{
      setNotes(doc.notes)
    })
    noteele.push({
      id:n,
      title:'noteele '+n,
      noteele:[]
    })
    notes.filter(note =>{
      if(note.id===noteId){
        note.noteele.push({
          id:n,
          title:'noteele '+n,
          noteele:[]
        })
      }
    })
    db.collection('boards').doc({id:ide}).update({
      notes:notes
    })
  }


  function deleteNoteEleFromDB(givenId){
    db.collection('boards').doc({id:ide}).get().then(doc =>{
      setNote2(doc.notes)
    })
        var n=noteele.findIndex(a => a.id===givenId)
        noteele.splice(n,1)
        var s1=note2.findIndex(a => a.id===noteId)
        note2[s1].noteele=noteele
    db.collection('boards').doc({id:ide}).update({
      notes:note2
    })
  }


  function handleChange(event){
    const reader = new FileReader();
   
          reader.addEventListener("load", ()  => {
         localStorage.setItem ("recent-image" , reader.result);
          });
          reader.readAsDataURL(event.target.files[0]);
  }


  function filePost(){
    const source=localStorage.getItem("recent-image");
    if(source)// will only execute if user has selected a file
    {
        db.collection('boards').doc({id:ide}).get().then(doc =>{
            setNotes(doc.notes)
          })
          var n=noteele.length+1
          noteele.push({
                id:n,
                type: 'image',
                iurl: source,
                content:null
          })
          notes.filter(note =>{
            if(note.id===noteId){
              note.noteele.push({
                id:n,
                type: 'image',
                iurl: source,
                content:null
              })
            }
          })
          db.collection('boards').doc({id:ide}).update({
            notes:notes
          })
    }
  }


  function textNote(){
    db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
      id:n,
      class:'LNote',//
      type:'textNote',
      iurl:null,
      content: ""
    })
    notes.filter(note =>{
        if(note.id===noteId){
          note.noteele.push({
            id:n,
            class:'LNote',//
            type:'textNote',
            iurl:null,
            content: ""
          })
        }
      })
      db.collection('boards').doc({id:ide}).update({
        notes:notes
      })
  }
  function textNoteHandleChange(event){
      console.log(event.target.value)
      console.log(event.target.id)
      var cont=event.target.value
      var givenId=event.target.id
    db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      console.log(noteele)
      console.log(givenId)
      const n=noteele.findIndex(b=> b.id===givenId)
      console.log(n)
      var s1=notes.findIndex(a => a.id===noteId)
      console.log(s1)
      notes[s1].noteele[n].content=cont
      console.log(s1)
      console.log(notes[s1])
      db.collection('boards').doc({id:ide}).update({
        notes:notes
      })
  }

  function getNoteEles(){
    db.collection('boards').doc({id:ide}).get().then(doc =>{
      if(doc){
      setNotes(doc.notes)
        notes.filter(note =>{
          if(note && note.id===noteId){
            setNoteele(note.noteele)
          }
        })
      }
    })
    }


useEffect(() => {
  const interval=setInterval(() => {
    getNoteEles();  
  }, 500);
  return() =>clearInterval(interval)
}, []);
    return (

        <Container>
        {/*----------Professor Mauro's code if we need to fall back to it----------------
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
    --------------------------------------------------------------------------------*/}
                {noteele.map((a)=>{
                if(a.type==="image"){
                return(
                  <Card id={a.id} className="picture">
                      <Card.Img src={a.iurl} />
                  <button onClick={()=>{deleteNoteEleFromDB(a.id)}}>Delete Button</button>
                  </Card>
                )
                }
                else if(a.type==="textNote"){
                return(
                    <textarea id={a.id} className="LNote" content={a.content} onChange={textNoteHandleChange}/>
                
                )
                }})}
                <input type="file" onChange={handleChange}/>
                <input className="popOption" type="submit" onClick={filePost}/>
                <button onClick={textNote}>Add Text Note</button>
        </Container>
    )
}

export default Newnote;