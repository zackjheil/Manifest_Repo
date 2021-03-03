import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import AddBar from '../AddContent/AddBar';
import * as IoIcons from 'react-icons/io';
import Localbase from 'localbase'

export class note_02 extends Component {
  
 /* Constructor object declared with a state of null */
constructor (props){
  super(props);
  this.state = {  
     newItem:"",
     
     selectedFile: null,
     displayNotePage: true,
     displayTextEditorPage: false,
     
     txtNote: "",

     list:[]
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
  this.setState({
    selectedFile: URL.createObjectURL(event.target.files[0])
  })
  
}
handleTxtChange(event){ // function to retrieve the test from the textarea in the Text Editor Page
  this.setState({
    txtNote: event.target.value
  })
  
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

}

filePost(){
  if(this.state.selectedFile !== null)// will only execute if user has selected a file
  {
    var output= document.getElementById('notes');// gets the editable note area 
    var photo = document.createElement('img');// creates a new image element
    photo.className="picture"; //sets the className of the image as 'picture'
    photo.setAttribute("src", this.state.selectedFile);//assigns the src of the new image element to the src identified in the handleChange function  
    output.appendChild(photo);//appends the new image elemet to the div as a child element
    this.setState({ //sets the state of the 'selectedFile' element of the contructor to null to reset the selection
      selectedFile: null,
    })
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

/**Jogie */
//so this function allows the list to be updated and changed by giving "keys" value which are placed on items//
updateInput(key, value){
  this.setState({
    [key]: value
  });

}


addItem(){
  //adds items to checklist
  const newItem={
    //this makes a new unique id for every new item or whatever you want to create in a list, so you can add more than one thing to the checklist//
    id:  1 + Math.random(),
    value: this.state.newItem.slice()

  };
  //whenever you click the button it should form a new line
  const list = [...this.state.list];

  list.push(newItem);

  this.setState({
    list,
    newItem:""
  });

}

//just a function to delete stuff
deleteItem(id){
  const list = [this.state.list]
  const updatedList = list.filter(item => item.id != id);

  this.setState({list: updatedList});
}
 
render(){
    if (this.state.displayNotePage === true){//condirional render of Note Page
      return (
        //this will render the button thing to make the checklist
            <div className="note">
               Make Checklist
                <br/>
                <input
                  type="type"
                  placeholder= "Type Something in here"
                  value={this.state.newItem}
                  /*Jogie //im pretty sure this makes it so the list can add...like you cant type without this and the list wont update*/
                  onChange = {i => this.updateInput("newItem", i.target.value)}
                />
                <button
                  onClick={() => this.addItem()}
                >
                  Add to list
                </button>
                <br/>
                <ul>
                // because im using "map" i can map over every item, therefore every item has to have a unique key//
                  {this.state.list.map(item => {
                    return(
                      <li key={item.id}>
                        {item.value}
                        <button
                        //this button will call the function to delete stuff
                          onClick = {() => this.deleteItem(item.id)}
                        >
                        X

                        </button>
                      </li>
                    )
                  })}
                </ul> 





                <Link className="backButton" to="/noteboards/noteboard_01">
                <IoIcons.IoMdArrowRoundBack />
                </Link>
                <div id="notes_title" placeholder="Title" contentEditable="true"></div>
                <br/>
                <div id="notes" placeholder="type something" contentEditable="true">{/*onClick={this.displayTextEditor}*/}
                </div>
                <input type="file" onChange={this.handleChange}/>
                <input type="submit" onClick={this.filePost}/>
                {/*<button  onClick={this.displayTextEditor}>Text Editor</button>*/}
                <AddBar></AddBar>
                <button type="submit" onClick={Added}>Do Something</button> 
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

export function Added() {
db.collection('n1').add({
  id:1,
  //Name: 'ASDASDASD',
  Content: document.getElementById('notes'),
  //content : 'Hi there'
})

  }

export default note_02;
