import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

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
    this.displayTextEditor=this.displayTextEditor.bind(this);
    this.displayNote=this.displayNote.bind(this);
    this.txtPost=this.txtPost.bind(this);
  }
  
  /* listens to a change in the constructor object state and assigns the 'selectedFile' value to the URL of the image*/
  handleChange(event){
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })
    
  }
  handleTxtChange(event){
    this.setState({
      txtNote: event.target.value
    })
    
  }
  displayTextEditor(){
    this.setState({
      displayNotePage: false,
      displayTextEditorPage: true
    })

  }
  displayNote(){
    this.setState({
      displayNotePage: true,
      displayTextEditorPage: false
    })

  }
  
  filePost(){
    if(this.state.selectedFile !== null)// will only execute if user has selected a file
    {
      var output= document.getElementById('notes');// gets the editable note area 
      var photo = document.createElement('img');// creates a new image element
      photo.className="picture"; 
      photo.setAttribute("src", this.state.selectedFile);//assigns the src of the new image element to the src identified in the handleChange function  
      output.appendChild(photo);//appends the new image elemet to the div as a child element
      this.setState({ //resets the state of the 'selectedFile' element of the contructor to null
        selectedFile: null,
      })
    }
    else{

    }
  }
  txtPost(){
    if(this.state.txtNote !== "")
    {
      var output=  document.getElementById('dummy');
      var txt= document.createElement('div');
      txt.textContent = this.state.txtNote;
      output.appendChild(txt);
      this.setState({
        txtNote: "",
        displayNotePage: true,
        displayTextEditorPage: false,
      })
    }
    else{
      this.displayNote();
    }
  }
  render(){
      if (this.state.displayNotePage === true){
        return (
                <div>
                  <div id="notes_title" placeholder="Title" contentEditable="true"></div>
                  <br/>
                  <div id="notes" placeholder="type something">
                    {this.state.Arr}
                  </div>
                  <input type="file" onChange={this.handleChange}/>
                  <input type="submit" onClick={this.filePost}/>
                  <button  onClick={this.displayTextEditor}>Text Editor</button>
                  <Link to="/noteboards/noteboard_01"> 
                    <h4>Back</h4>
                  </Link>      
                </div>
        )
      } 
      else if (this.state.displayTextEditorPage === true){
        return(
          <div>
              <textarea id="txtEditor" onChange={this.handleTxtChange}/>
              <input type="submit" onClick={this.txtPost}/>
              <div id="dummy"></div>
          </div>
      )
      }
  }
}

export default note_01;
