
import React, {useState, useEffect} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import uniqid from 'uniqid';
import Localbase from 'localbase';
import {Card} from 'react-bootstrap';
import * as ManiF from '../helpers.js';
import './NewNote.css'
import DeleteButton from '../../assets/Buttons/DeleteButton.svg'
import AddNote from '../../assets/Note_Icon.svg'

let db = new Localbase('Mani');
// Object { title: "", text: "", id: "" }


const Newnote = ({ide,notes,setNote2,note2,noteId,setNotes,noteele,setNoteele,setIde,notetitle}) => {
  console.log(notetitle)
  
  window.onbeforeunload = function() { 
  window.setTimeout(function () { 
      window.location = '/';
  }, 0); 
  window.onbeforeunload = null; 
}
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
console.log(ide)

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
      setNotes(doc.notes)
    })
    var n=noteele.findIndex(a => a.id===givenId)
    noteele.splice(n,1)
    notes.filter(note =>{
      if(note.id===noteId){
        note.noteele.splice(n,1)
    }
  })
    db.collection('boards').doc({id:ide}).update({
      notes:notes
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
      type:'textNote',
      iurl:null,
      content: ""
    })
    notes.filter(note =>{
        if(note.id===noteId){
          note.noteele.push({
            id:n,
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
  function changeTitle(event){
    db.collection('boards').doc({id:ide}).get().then(doc =>{

      setNotes(doc.notes)
    })
    var newTitle=event.target.value
    notes.filter(note =>{
      if(note.id===noteId){
        note.title=newTitle
      }
    })
    db.collection('boards').doc({id:ide}).update({
      notes:notes
    })
  }



  function textNoteHandleChange(givenId){
      var tArea=document.getElementById(givenId)
      var cont=tArea.value
      console.log(tArea)
    db.collection('boards').doc({id:ide}).get().then(doc =>{

        setNotes(doc.notes)
      })
      console.log(noteele)
      console.log(givenId)
      var n=noteele.findIndex(a => a.id===givenId)
      console.log(n)
      notes.filter(note =>{
        if(note.id===noteId){
          console.log(note)
          console.log(note)
          console.log(n)
          note.noteele[n].content=cont
        }
      })

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
          <textarea rows="1" className="Header" onChange={changeTitle}>{notetitle}</textarea>
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
                  <button className="deleteButton" onClick={()=>{deleteNoteEleFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                  </Card>
                )
                }
                else if(a.type==="textNote"){
                return(
                  <div>
                    <textarea id={a.id} className="LNote" onChange={()=>{textNoteHandleChange(a.id)}}>{a.content}</textarea>
                    <button className="deleteButton" onClick={()=>{deleteNoteEleFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                    
                  </div>
                  )
                }})}
                {/*<input type="file" onChange={handleChange}/> */}
                <input type="file"  onChange={handleChange}/>
                
                <input className="popOption" type="submit" onClick={filePost}/>
                <button className="addTextBox" onClick={textNote}><img src={AddNote} alt="Add Note" /></button>
        </Container>
    )
}

export default Newnote;