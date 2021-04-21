import React, {Component, useEffect} from 'react';
import Localbase from 'localbase';
import App from '../App.js';

let db = new Localbase('Mani');


//deletes all boards
export function deleteCollection(){
    var ui=window.confirm("You are about to delete the all boards and notes. Click 'OK' to continue")
    if(ui===true){
    db.collection('boards').delete()
    }
}
//delets the entire database
export function deletedatabase(){
    db.delete()
}
//adds a board to the database
export function addBoardToDB(){
    db.collection('boards').get().then(arr =>{
        var n= arr.length+1
        db.collection('boards').add({
            id: n,
            title: 'Board '+ n,
            notes:[]
        })
    })
}
//deletes a board from the database with the given ID
export function deleteBoardFromDB(givenId){
    db.collection('boards').get().then(arr =>{
        if(arr && givenId<=arr.length){
            db.collection('boards').doc({id:givenId}).delete()
            for(var i=givenId+1; i<=arr.length; i++) {
                db.collection('boards').doc({id:i}).update({
                id: i-1
            })
        }
        
        //console.log("board"+ givenId +"deleted")
        }
        else{
            //console.log("Error!")
        }
    })    
}


/*export function openSomething(id, {setNotebook}){
    db.collection('boads').doc({id:id}).get().then(doc =>{
        setNotebook(doc.notes)
    })
}*/