import React, {Component} from 'react';
import '../App.css';
import note from './note_01';

class textEditor extends Component
{
    constructor (props){
        super(props);
        
        this.txtPost=this.txtPost.bind(this);
    }

    /**/txtPost(){
    var output= new note.passid();
    var txt=note.createElement('p');
    var itxt=document.getElementById('txtEditor').value;

    output.appendChild(txt);
    }/**/

    render()
    {
        return(
            <div>
                <textarea id="txtEditor" />
                <input type="submit" onClick={this.txtPost} />
            </div>
        )
    }
}

export default textEditor;