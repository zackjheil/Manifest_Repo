import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class note_01 extends Component {
  /* Constructor object declared with a state of null */
  constructor (props){
    super(props);
    this.state = {
       selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.filePost= this.filePost.bind(this);
  }
  /* listens to a change in the constructor object state and assigns the 'selectedFile' value to the URL of the image*/
  handleChange(event){
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })
    
  }
  
  filePost(){
    if(this.state.selectedFile !== null)// will only execute if user has selected a file
    {
      var output= document.getElementById('notes');// gets the editable note area 
      var photo = document.createElement('img');// creates a new image element 
      photo.setAttribute("src", this.state.selectedFile);//assigns the src of the new image element to the src identified in the handleChange function  
      output.appendChild(photo);//appends the new image elemet to the div as a child element
      this.setState({ //resets the state of the 'selectedFile' element of the contructor to null
        selectedFile: null
      })
    }
    else{

    }
  }
  render(){
      return (
              <div>
                <h1 id="notes_title" placeholder="Title" contenteditable="true"></h1>
                <div id="notes" placeholder="type something" contenteditable="true">
                </div>
                <input type="file" onChange={this.handleChange}/>
                <input type="submit" onClick={this.filePost}/>
                <Link to="/noteboards/noteboard_01"> 
                  <h4>Back</h4>
                </Link>      
              </div>
      )
  }
}

export default note_01;
