import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class note_02 extends Component {
  /* */
  constructor (props){
    super(props);
    this.state = {
       selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.filePost= this.filePost.bind(this);
  }
  /* */
  handleChange(event){
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })
    this.filePost()
  }
  /* */
  filePost(){
    if(this.state.selectedFile !== null)
    {
      var output= document.getElementById('notes');
      var photo = document.createElement('img');
      photo.setAttribute("src", this.state.selectedFile);
      output.appendChild(photo);
      this.setState({
        selectedFile: null
      })
    }
    else{

    }
  }
  render(){
      return (
              <div>
                <h1 contentEditable="true" palceholder="Title"></h1>
                <div id="notes" contentEditable="true" placeholder="Click here">
                </div>
                <input type="file" onChange={this.handleChange}/>
                <Link to="/noteboards/noteboard_01"> 
                  <h4>Back</h4>
                </Link>      
              </div>
      )
  }
}

export default note_02;