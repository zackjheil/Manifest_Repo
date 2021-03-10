import React, {Component} from 'react';
import '../App.css';
import './note_01.css';
import '../AddContent/AddBar.css';
import {OverlayTrigger} from 'react-bootstrap';
import Popover from '../Popover/Popover';
import { Link } from 'react-router-dom';
import DropOptions from '../DropOptions/DropOptions';
//import AddBar from '../AddContent/AddBar';
import * as IoIcons from 'react-icons/io';
import Localbase from 'localbase';
import autosize from 'autosize';
var counter=1;
var picturecounter=1;
var pic= {};
export class note_01 extends Component {
  
/* Constructor object declared with a state of null */
constructor (props){
  super(props);
  this.state = {  
     selectedFile: null,
     displayNotePage: true,
     displayTextEditorPage: false,
     txtNote: "",
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleTxtChange =this.handleTxtChange.bind(this);
  this.filePost= this.filePost.bind(this);
  /*this.displayTextEditor=this.displayTextEditor.bind(this);*/
  this.displayNote=this.displayNote.bind(this);
  this.txtPost=this.txtPost.bind(this);

}

/* function to get the URL of the selected image*/
handleChange(event){
  const reader = new FileReader();
 
        reader.addEventListener("load", ()  => {
       localStorage.setItem ("recent-image" , reader.result);
        });
        reader.readAsDataURL(event.target.files[0]);
}
handleTxtChange(event){ // function to retrieve the test from the textarea in the Text Editor Page
  const reader = new FileReader();
 
        reader.addEventListener("load", ()  => {
       localStorage.setItem ("recent-image" , reader.result);
        });
        reader.readAsDataURL(this.files[0]);
}

/*displayTextEditor(){ // fumction to display the Text Editor Page
  this.setState({
    displayNotePage: false,
    displayTextEditorPage: true
  })

}*/
displayNote(){//function to display the Note Page
  this.setState({
    displayNotePage: true,
    displayTextEditorPage: false
  })
  console.log("file changed");
}

filePost(){
  const source=localStorage.getItem("recent-image");
  if(source)// will only execute if user has selected a file
  
  {
    db.collection('n1').add({
      id:counter,
      class: 'picture',
      ncount:counter,
      type: 'image',
      iurl: source,
      content:null
    })
    var output= document.getElementById('notes');// gets the editable note area 
    var photo = document.createElement('img');// creates a new image element
    photo.className="picture"; //sets the className of the image as 'picture'
    photo.id=counter;
    counter+=1;
    
    photo.setAttribute("src", source);//assigns the src of the new image element to the src identified in the handleChange function  
    output.appendChild(photo);//appends the new image elemet to the div as a child element
    this.setState({ //sets the state of the 'selectedFile' element of the contructor to null to reset the selection
      selectedFile: null,
    })
    console.log('file posted');
  }
  else{

  }
}
txtPost(){
  if(this.state.txtNote !== "")
  {
    var output=  document.getElementById('dummy');//hidden div. at the bottom of the Text Editor render  
    var txt= document.createElement('div');// creates a new dix element 
    txt.className="txtNote";// sets the className for the text note div as 'txtNote' 
    txt.textContent = this.state.txtNote;// takes the content from the text area and writes it into the div
    output.appendChild(txt);// appends the bothe the 'dummy' div and the 'notes' div
    this.setState({
      txtNote: "",// resets the text area to empty
      displayNotePage: true,// accompanied by the next statement tells the program to show the Note Page
      displayTextEditorPage: false,
    })
  }
  else{
    this.displayNote();
  }

}

render(){
    if (this.state.displayNotePage === true){//condirional render of Note Page
      return (
              <div className="note">
                <Link className="backButton" to="/noteboards/noteboard_01">
                <IoIcons.IoMdArrowRoundBack />
                </Link>
                <DropOptions></DropOptions>
                <div id="notes_title" placeholder="Title" contentEditable="true"></div>
                <br/>
                <div id="notes" onClick={showAll} placeholder="type something">{/*onClick={this.displayTextEdito*/}
                </div>
                {/*<input type="file" onChange={this.handleChange}/>
                <input type="submit" onClick={this.filePost}/>
                {/*<button  onClick={this.displayTextEditor}>Text Editor</button>
                {/*<button type="submit" onClick={textNote}>text Note</button>*/}
                <script>
                  autosize(document.querrySelectorAll('.LNote'));
                </script>
                {/*<button type="submit" onClick={Added}>Do Something</button>*/}
                {/*<button type="submit" onClick={dummy}>Dummy</button>*/}
                <nav className="addBar">
                  <button type="submit" className="popOption" onClick={textNote}>Text</button>
                  <OverlayTrigger trigger="click" placement="top" overlay={
                  <input type="file" onChange={this.handleChange}/>
                  }>
                    <a className="popOption">Image</a>
                  </OverlayTrigger>
                  <input className="popOption" type="submit" onClick={this.filePost}/>
                  <a href="/" className="popOption">Option</a>
                  <a href="/" className="popOption">Option</a>
                </nav>
              </div>
      )
    } 
    /*else if (this.state.displayTextEditorPage === true){// conditional render of Text Editor Page
      return(
        <div>
            <textarea id="txtEditor" onChange={this.handleTxtChange}/>
            <input type="submit" onClick={this.txtPost}/>
            <div id="dummy"></div>
        </div>
    )
    }*/
}
}
let db = new Localbase('Stored')
// This Creates the button
//var button = document.createElement("button");
//button.innerHTML = "Do Something";

// This puts the button in
//var body = document.getElementsByClassName("note");
//body.appendChild(button);

// This is the button function
//button.addEventListener ("click", Added, {
//});

export function showAll(){
  var output=document.getElementById('notes')
  db.collection('n1').get().then(arr =>{
    var n= arr.length;
    for(var i=0; i<n; i++){
      if(arr[i].type==="image"){
        const source=arr[i].iurl
        output= document.getElementById('notes');// gets the editable note area 
        var photo = document.createElement('img');// creates a new image element
        photo.className=arr[i].class; //sets the className of the image as 'picture'
        photo.id=arr[i].id;
        counter+=1;
        photo.setAttribute("src", source);//assigns the src of the new image element to the src identified in the handleChange function  
        output.appendChild(photo);//appends the new image elemet to the div as a child element
      }
      else if(arr[i].type==="textNote"){
        var tArea=document.createElement('textarea');
        tArea.className=arr[i].class;
        tArea.id=arr[i].id;
        tArea.value=arr[i].content;
        autosize(tArea)
        counter+=1
        output.appendChild(tArea)
      }

    }
  })

}
export function textNote(){
  db.collection('n1').add({
    id:counter,
    class:'LNote',
    ncount:counter,
    type:'textNote',
    iurl:null,
    content: ""
  })
  var output= document.getElementById('notes');
  var tArea=document.createElement('textarea');
  var cid=counter
  tArea.className="LNote";
  //tArea.contentEditable=true;
  //tArea.textContent="";
  tArea.id=counter;
  tArea.addEventListener('change', () => {
    db.collection('n1').doc({id: cid}).update({
      content:tArea.value
    });
  });
  autosize(tArea);
  counter+=1;
  output.appendChild(tArea);
}
/*export function dummy(){
  var output=document.getElementById('notes');
  var cont=document.getElementById('1').value;
  var input=document.createElement('textarea')
  input.textContent=cont;
  output.appendChild(input);
}*/

/*export function Added() {
  picturecounter=1;
  db.collection('n1').add({
    id:0,
    class: null,
    ncount:counter,
    type: null,
    iurl:null,
    content:null
  })
  db.collection('n1').add({
    id:1,
    class: null,
    ncount:counter,
    type: null,
    iurl:null,
    content:null
  })
for(var i=1; i<counter; i++){
  var ele = document.getElementById(i);
  if(ele.getAttribute("className")==="picture"){
    db.collection('n1').add({
      id:2,
      class:'picture',
      ncount: null,
      type:'image',
      //iurl:ele.getAttribute("src"),
      content: null
    })
    
  }
  else if(ele.getAttribute("className")==="LNote"){
    document.getElementById(i);
  }
}
console.log('files to db');
console.log(counter);
  }*/
export default note_01;
