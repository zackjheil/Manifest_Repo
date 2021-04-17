
import React, {useState, useEffect} from 'react';
import {Form, Button, Container, } from 'react-bootstrap';
import uniqid from 'uniqid';
import Localbase from 'localbase';
import {Card} from 'react-bootstrap';
import * as ManiF from '../helpers.js';
import './NewNote.css'
import DeleteButton from '../../assets/Buttons/DeleteButton.svg'
import AddNote from '../../assets/Note_Icon.svg'
import {Popover} from '@material-ui/core'
import {UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap'
import { eventListeners } from '@popperjs/core';


let db = new Localbase('Mani');
db.config.debug = false
// Object { title: "", text: "", id: "" }


//Functions For the Emoticons


const Newnote = ({ide,notes,setNote2,note2,noteId,setNotes,noteele,setNoteele,setIde,notetitle}) => {
 {/* console.log(notetitle)*/}
  
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
  {/*console.log(ide)*/}

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
      {/*console.log(tArea)*/}
    db.collection('boards').doc({id:ide}).get().then(doc =>{

        setNotes(doc.notes)
      })
      {/*console.log(noteele)
      console.log(givenId)*/}
      var n=noteele.findIndex(a => a.id===givenId)
      {/*console.log(n)*/}
      notes.filter(note =>{
        if(note.id===noteId){
          {/*console.log(note)
          console.log(note)
        console.log(n)*/}
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

    function Happy(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAgCAYAAACVU7GwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAURSURBVHgBtVhfTFtVGP+VzdDEOS4+CA8KF5KZGBktMTPGSXbrJHETTQ1kyYSkKk+yhxYfFPWh5WW6p5aHMfbUNhnGB5e2cWP+IbaEaUyMobDocA9w2/gg2UNvl5gUF1a/79DWC+29tAV+yZd7zj3nfP3d75zvd84pUD8kMhkHAEsNfRUyJ9mpZqlRbjpqleS2JqjpLLIPclpG20hS2xJZiCyJPaAaUm4yj/JKm+wa7oaz/1lITdayTsnldSTvrCN8bRmJ22kmFSALV3KYP3fOi3zeQ0Wt0I8/ViZT8fDhe2ak7GQR9+gJ2fdpb0UiRuDo+S4uIDyzHKXqmPixIqHBQQUWS9xw8KNHkw0GTW6amsX47JAcuNRXEyEGT2touh/B6X7nsc5mJmAvNVossulgi8VWiZTXfrwlsPjzCJTeduwF7w514/tv3pH5A7G1JilUedV0UD6/tHP6nEQoEr81VHN0zMDTefqNGW1V1RxUTeYHBgJoaHBX6kpryqGPlEyh9ke+GtxXQsIxTef1mQGWkAhYSjY3fSjPUEHIEo2qelK+zz46yaHGQcDe3QLfJ70yFT30wxoT0BErEeJKcfoUSvl4/NawqIRmlhG7cU+UWQJctDZqgabl4Pt8AbGb90SUglf6IbdL0LI5dHZdZk3rwJYcgKbSSZFLCKIFHCo8fZQpdh44Qc7GPp5D7t8ncOXq12h9+lWs/BEn50dQLZ574Sq+m1uF2zOOwGQY3/54H9LjabS2HEEut2klHdugbgnuO3H37srEykpOP56nj5XZVcy0EImfiJDTCbvdLiw6ex/VIrGQEgubwWMlSaLnS5ic+lW8c184wQ+XmY/D4KnTpX7RYSgUgizLUFUVsdg8Ahe7UCvGxsaQSqWEL+Xlx8Q7TiKlt01OLKRl6ERVD46UnTqVXhTLmqbB4/EgEAjUpFe8oKWmRlHmD2IfyWRSvC/1OS7KNiMfTEpu12VccPpN6DOQEgD+S6+hWnAk4rPDJR9M0P9F37ZkKbR1GPng6WuX26RtA9Z+vwA1VUoGkU1s1RNrxOJPIyLbJMlapntNkqhLZqQqgjMxduNPOM9fRz3gLYYyGvWApy+lprWKjbbuVtSLwrqpiOxW1DWjdo6UlkpRxvWWN/JU8lRo2Q2YQVEUkalsDE6OUybJUcjwNaN2jlSCD2dG8Iy+aNjmdruRyWQQj8cRDAbh9XrhcrkgHc1Ttj1lOK7we0tG7bzNSLQQM5m/PqzYgRdrx/OXy6IViUSEwG7rSzLS09OD4NRJQxnhBOromlJhkn0Nwlc2l2AlroRiihe1h+H3+8sIsSY5HA64zj9jqmu0xfAjDBP8vyH30oY8O2zYkdeB48w1aA8s8Pl8sNlsIjKs2NFoFOrqosi23YSWo06+OErqbqQYRGpI2c0pR3R+IV3SMbutBTbKtGpUnzd7OrtPUNFn1k9PSu6UpcXfbr8v7fchj6FbSz0wkQOG/pCn0nF1wnF2BgdB6HT/l0zEsRshxqEd9V/+Xv/HsnRnXXm9rxNW62HsFUyIP3Qtlf0AhTPUbjC69/lIOL20xsR2Uy94/Y2M3uQLw9vVEmIcMvJHujRPBzPFYhGHQLGxVguOjmf8B4yNzyUyWu4MarzGV3Nt9zzZbHW/dfaYzMcP3tMqEeRTRJTO5HQrpgilVWxlWBh1oJY/OJwFs9GBzV4UU1Z6Vn01lVWpGiPjq3oCe0AtpHZC1pVV7CP+A4U0/mODqjPgAAAAAElFTkSuQmCC",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Sad(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAYAAACxHzfjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT/SURBVHgBtVhNbBtFFP7WiZS0SHjNoeVQJZtILRfiWEithNqQDRUHoBUOnKgRscWlSRCxJUClHOKIAz8HEh9aUC+2pQapB9RETXpBwhtSiYoK2SQgQSI165xaJMi4P2rSQ7fvrbPOxl4nG8f5pPHuvp2Z/fbN9968tQR3kKkFqXVTC/jkJsX7bDPbULi3KlbEWo5O/6A2QU1DnSFhe3JDRCr6/hm/HDx1BAH/Qcje5k2d9OUCcnN3MDG1iPT4nE6mOLU0XOJk2hgyDISfGOjVIpK+E5JMLv5R/zE5Oni0glg1MOHU5TmMfDmr02UMRe9uiZ6UkSEiKgxEfo5IqfL7Hocx7L1kX8g/dvvPQTl+vss1QYbS4gWPWfprUAn4D1wl0zB2CSdPZoc/6wrwg+qB8NlrJIH5OJ2O2O2vpoxROgR5iSUJo5YnJQ+8tPQBssdo6QX3LffkaD0JMlLfn0ZfqCOOMo8aFIB0UDzF44bdwBi/G9+zbHaSQ+GQP1pPghbGvn6NAu5AHOwt9xDWiUVSOdzuiw7vAUEGazr53Wk+TaIGWCTjn396XGHR7xU4dVEwKnTa53aMmjQC1FgSkNsV+S2aoLKX5MPMr/s5ncAtYud+Qs8bl5GbL1TcW5dSuOIxNv3ZoHgkZM1GF8FXjrfI9rvabB7azUPAMx+j9XAIYxduwS04R2qzy0hcegjs/xBofGnjqbRSaleLCmdSm+DZ6CMzSZWir3Sz6IlxxD65BE3TkEgkIAqr2Cl4rPbLP0hfeWB61kLwzSPmQbIFhg2yg0000k8n68VC67ouc7kcenp67BO7QnTgGOIkD13XS+NHKbotKK3m/J2UB9O0lOIJvY9nIz05k/TJ+xT7jsIPEWINiYu/kQfXoJ5oweg3Gw/R8wKT0wtmH3NWuQndJ1phvShnCPZ8anzOjOohmi86cLQ0vtP/vMmVEjVvl+aWSYm9NL0DSUikE4O2MGwHJhfpnzL15gQmefWHd8hT8pbz8Av4Dn2r02mbZSOSS0ycdxyKIjNN8U5EnuZtVffABZgg67QaQUZu7i7aXrzIVRDcTOmiT0mzjffuP+YByla9mSBXN05QVRXBYBBeb1HL8ZERdHYchF3nm9jlBXaKxv9XHgk9X7AEXQHWlhNBRVGQTCZNkuX22Lk+ZK6/5zgf6xzFArkELiZ4D18PolJX/iG1CrbNzFBerAan5WMi2Wy2giDDtDW0V01bk1MLfMjabRxEVEfGy2w51qXB2qTrCe1Gda056TCTyVBUVw+QQCCAyWsLjvcmiiRnqgyVy8lzpc55UpucXhT05nJ5ccufBE6w8l81CCEQ7e+osPNORtLRUD1wrCXedJ9JYkU8SiQu3Bour4IClNOM++dRC5yWO1WUzki1Mew1KijaULYbWZW5/JxvX/b32YiyXZ6rFUwwcnaKk3cvdggrmARFeaT3zI/YC3Da+eKrG+ydGGpAg32uO3cfSvlloQZPvYB6QYhVvHwyjaV84V26vIka0FB2reXm/zWJql2taG5uxG7AHnz97Sv4e/E/9mAKNaLad3ec9vThzPUQatUoR/IHA9Piti4icPHtvRW2+nNAoZYJhzoU+oJ0TZbJcSVP+VWjSyaoY5fY7m8WRphaH1fUKpVk3V0tZgkme5tKHUgiJjku4WiL1VBMMxrqBDckLSgofpLyd3Knzc5Ry/sq/2k1AeeKe1d4CntF5/ON/FclAAAAAElFTkSuQmCC",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
     }


    function Confused(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,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",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Angry(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAfCAYAAAB+tjR7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU+SURBVHgBtVhPaBxVGP8lLSQWNLMoFEGS2R6qqGk3B73YkoniwZqSLenJFHZXL00rbCKCtpfdXCLx4CaHpqfSBBIsgmRXU6u0sBMTERSykwRFKySzxUPjwUwUNBUh/b6ZN5uXzU529k9/8DGz7828+b3v/b7vfW8b4B8aWSdZiE1tbVG50drcIntg0K1JppNlxH0tiIqxTLmxwceLYbK4dqJVC58+is4TbVDbWqC0NBceYMLG8jqWVtYxMbUMY+UPnZonyCZRORJkSTiTDvslyx5MhbuPavELL0E72Qa/0OfzmJheweT0cpp+DqK0p1Uen8wiG5KeWRN9Q4J0WbLxI6qSvDb+plIJyWJMTC9j+OPvzN9WN5hwuqh7QJB1cUYQzonfQfiQQSLUfjg5c+MsSJeoFea9TXS9McXXKPbKgtt42VUy1n1MIhuA43WIfrOYbJyIjmZv9e3SZB0Jd8EJHBmsyxmJIMtAwU7AqnCCW2+UXlLJk6Ps0XoStQemFcreOoeA0jQjPi5DEVdL2KD7GhzPa27/Aeml3MynZ5XQscN4FGAHNDUfbP7mzioHrisH9upVMvbODTgZwBD9vOq/kM2RXSIbcT0bjfYdU2sJJj8YuPAyZZVWDY633OV3l5wJZsm24eiWr6xhDkSd33fJJhKXT9o3nC8p5aBesKwtDH00b+di+0OX7O8kBEFTEGFS17Gz5IogeV0e6yBZiBK+6kZ+7PyXnNRh/PwkUiOngf8XURUan4b1z/MItvcSYQvKE82IX3TytdLSpNGuZ8JJT4woRMTD0WxITIjbx+BIw/ZsONz9bOEbHLkM9UgHKakXOPQ+xq6uFDxTDmbewuRn5IND70J56lWEQiG73aDdzQVJji/y7tQjrktw8nFSkEy7RBns2c5OSascYPr8PSSTSdsjhmHAWPwW8f52+CJLk42+M26Pwe/rum63k1YLzxx3gjgkveZmBENqGygemyNubfvvy6rbwJrtOjXFxUnhIcoSoG0XfjH4wW2Mjv9Y+E0ys1OXPKHgC1fkvZ+JRbCzi5VEA6WU7Y3f39vVyINlZn+179nrtFFAnszcQh5reUcuAUpJneS14kzC9cEcebdUH0sq8MwnJnY06wsNFFjbaz9dLPsgazHWP2svbylwgCYpo0QcPZb/8OPDJiok27j5139WuYeYaMcr1zyJ2s+wVs/P2hIoO54TxGW/W4yDG9a/Fi2L4rXFcp7sOjW9S8MyFEVBJBJBMOg4iQNqjPTKZaUn2bxVHVkyg3TouXulb94tpLNikolEAgMDu4OWiXeEniM5tHvWGGK8JVQIzrNzc/ss79iVH/a0qaqKXC63hyiDJxGN9WNyasVzTA4+OFtrxWTT+kK+ZCcvF+9mxUilUjZhL/T09MBrTMYXN++yBDKoECwDkwJHp9lqxVLwWv5MJmObF+zNZHm9ZB+fHjasB2lUAbf4JqKt2exX53Z/VBwEqwHrtVS5SZsBO2HPkcUP5JNCdnTkdW2/KK4VXH0lh+f3HAT9QiarBpTHcosLMUVtU1BvcFBRCjTpliqkytMWQz7WmJRzz3BOFXmwbmAp9fZ9btItn8GqHryx6LdOeorVkzB79LXuafPPja19ixQ/aCzRNkGEO4IvjptjUuVUKXjnG/zwtr30RJQ9aqBGHPBov0+W+frOaoCOOKGAUjqyvUiOpL7HW2+nLUqJI3COLPdRB/j5r0slS1JVFdFEuddGFZb8BwjXDVw2sjYzlPApj3KVP4oa9FktWRecIjRhx0Wbip2DHy8z7/c6HhEeAlmXG/sO7437AAAAAElFTkSuQmCC",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Excited(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAjCAYAAAAJ+yOQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVUSURBVHgBzVhPbNtkFP+5LWqRkOpyoLvQepMY/5bOORRNaKXOgcPGoEFMHKhQEnFhq0SyE7ADSTkwOC09bOqBqalEEUJCaaWWC0JxVWASPThtAUElFqdwoDtQR4Bopa3Ze46dumkSO9m67ic91Z/9xf5973vv995X4IBQ/AWXyXLFFShuc9twUCgiDAEiHkKn29QWHABM7zFBc4Alt/mNelImGyQ7TOb0QJ4sa5nu+hbBfA8jKzztPt8LSV5xlCymnOwRlYFe9PZ2QurZ4bi0sg5t+SbmF/LQ1woq3UqRTdZ8YwuGzL/bmIcHCHAh1yW2x94595wYG+mH2NkBN6hENDW1gsmpZZ2GMbKZyjmUMEWLbFB4CjNFrbT1gh8GGiApkWWi5/ulxMUBT+QqQR5F4NRn/DdBw9EyQY7HVmTMwRa6wM5oN8cijQ9XI1otcWTynpb5elhKfvJiUwQZHA65n0cQf38gQcM0YCVKS1lyVAdByfJtVVTGpHREEjPfzg2Lzpi7G/BOEIKjlxbYQ5Hyg23K6h2CBlmg1nY7PSmRZb76/LV7RtBJNHa+P0yXl4VnkSCCfvqyuIvgMWQpNiW2yt87YzJFWxOyVn7PYRQ24X/+GsdogIZq8SeSoRbErcciEZXL2tkGv3DUlLNdJCXyXo5jaD/BmR84PaXSJRNFcRlBIpSumKYTq4BTP+3tTuyXB51gjVUGehS+NG/cpuTZxphlETO7nyGrEHj25B4vqiVRNjOUX9wMDGMT03OrpjrIvscg9Yrld9veJL0MopT5WVPYi5jGLapCFQnE2a0Ezxwt36AsROKjhfI4POzDxPjLaAR63mAi5kIZTJQkDXJft7lokjh5w9gSiZho7SXHJ5fKKGkoi71KhOfpuSr4oPKUoSGLJK/SJhgOhxEKhcgbf2B6dhWNIHJutrQTkkRxlIDsP4HI27Pl5y+cNN0qU0anaMsDRIjFXnW8ghuQOIs+Ec6wJyVeYdlzb/goCB7GxKcfmOOkr5My8wYawXFfN6THOxGKRKAMDiI6MoAL0Vj5uZ+ez8yusudMT9kEzfLYSgRbTJKDViMicUxuFP+5KOI+IjW1zJ5l7yXqzbNrehslx30l6IBrRtoJVLdV4wSYpI6mGUjUzoWG++pNKcAj2ijAdWBvKWJwlUhcWkAzoN6zJskCyRO/Hh7B2a3r+eqLkvsOkXy0oxk4k7ESljRp8AgmuTRTR2LqfYyhKAqSySQ0TUMulzON7w3WKQIsdfxdNEByenrut5oTqOmoel8URaTTaWQyGUSjUciybOoiQ7+hwVkgnOA4z67c9HYWcpBU1YU1g+OvGrhCVH6QybDngsHgbgK6jkAggPQXZ2t+0IrxJBqA3WCMjV1ZrDlpYvwMNwY7H6IqYnvNRiqVQkA5gfi7x6hWVw8R9uIP1//U6dLTAcyG3aqxVmra929J9WKQRXiUyqZ0xF8maRi0fdp1yuZuxKmTqtcwX3jvGySvLLqKeC2SDIUIZrgRcDvXZJfXYYcHz2VNdPuN1f3oKJ3ZG0Kr41r/a/0/YX39X+qKnqz7o0Pdj5itFxtfd3TUP77zNr/+Zlr/e2OTm13P+liNJEOlzBPya4YrUa9gr7909kvj95xxioa/ognUOncnKLbivPV2s9oMxq7+iA8//o49+Cqwc2ZpFK017qtGYSs/dnVRFuhwxMkgit7P3xx/3FOOX9PU/zdv8RbruAsILs/ZjbFHuzpCr5x+QhqiEOCaXI0wx90MHRe4QSbdVYE9jey+kXQiaNlxqucyhwHXda7DhcKmQccB3s55i5iKBwSlw73975N9xB0yivyhNRUJ7QAAAABJRU5ErkJggg==",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Heartbroken(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,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",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Anxious(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVUSURBVHgB1VhBbNtUGP7tTtouqM6FHZBadwdOa5ccikAiqgucYKie4ICUSUk5USbR7ITKJc5lFQfU9NBqHCCpROGCSCu6gcRYUnUSEhOa2woJdqBOTxQOdbisk1jM9z/bmZcmTZymSPukp2e/OM/f+9//f//vR/SUQKLwUNE0rx/0xqpoO2ibaCaaTT1Gp0QVtGm0VHT4WXUsPkhDg/3U33+m/kClUiVza4/KdypkVx+uYGgJbYV6hHZEBcGIcjr9wdQLSvrKKCkBcq2wsvY7zS/cBeldC7eXyLVyS2h5h98TLU9KZeqCaBStOP3+qGp8FO+IYCPM7T269M7XZO1WDdxmg7+9UnCK/I6aQzFZopJ3Pd6KbCuiyXOqkvts8Q1Fiw/ScWFc26Ds7AZbdZw8/wVRh/uaRLrsUI7Y5x26WiMq90k098gRC7NkuBvGcqeazKurA/2FH28kCD31ArwjQBRkSz5ZsLRhJUWuUcSRSPEthj6N3zRY2XK8wMVCbLlhThWWzJe+u9wzkkGymZk4u9OcN2R6zOYkNxaIrUmPCav+OPGCGuYrfTL7mtJrkkGyWnwgRWw1bLPjuoEgg/t5+KcpeQtwXAmMigXIdC9INJVKjKj6xefpJJG//iZBRTIgZYFcDIyy8NMUiBmCFFEB15b/PK7NclJaDQbTzs6vV9STsmYQWQSXMbvBwWLwPQKLk4WKqB/iBUCuVA4iSab9RzVawpjtE2Vr5vPXL9YnY/G2qwfCV9VBhbqFbR/Qyo37Yh5fQXjec+cX7H37YcQj6ioA5EmWaQxm1D2pqmc4P+qTycSwuLAqNo2/vszaJ+75BcWv3qboyFkKC0S5kCYf8E8q3bwsNPnC8FmlvLGrUSCABBzXyrCojq7gD7OPcvBo/mqxJYKkoigwcwpPRARxtkIY8IJ9kpqmka7rBGJi2xnJxAh3usvN1VbZlSMBBNB+cD62aDRorU1sOVvRMDKUBFHbhoXxIqvyD6zaeXZC+hTz8IJLt4tiLJe7QJu/uNeeYca8xznSNWhSvj5BTRQ4dbCPpoyZeD7jivL/CumZa2zJCIInKiGN1nUTSnB7UjKCz7JF1TB5vLxRofnFu6JHlSTGlP7TwocRkP6WdgRYXGE3Y/0E2Zjj6qbdLN+f8l/UDhy9V2duUeGLrcO/gTD7Hzf2y9LNRGilYFmigH42QvZf1A6TU2tNSTaCLSRUo9Lb2pmJWtbu0ZMWlrdQY95v+hsHSyaToVKphIyxI1pyMi0W1g5YVMer4a03uW48CtmAFgbBkpPP5wXZIAzDoPH1deHHrcpEc+tP0VGHEBbd3P675cr4Zb74BzE9PU3FYvEQyeAiVlvsAmMd/kz0pAS1I4pU9sBkQs3AutoIVVWF1Y7CxMSECK5W4LRKIb6p/BSaRbrTmm2Tuf3XoTFOArFYjNrB3q82HedAwyIsakyfR+CJ6gmyojaS5dTJ0tQtmslU6r1vaWl5O0Xul2pHCBLVUTQUuWg4SbA1h84vWrgcCvO/vsD1bwgaLaKcUV8cfY5OArwzL726xLrNn9BWmP82fopMpj/8wWoVWMcFayuMwQVzmUKikaiFNv5W4hvL3NqjXoJJImnMk1fVh0VfkzH7wcG/q59+fk9HRXPs73q/EP/+1h9MMk1doq/FOCeAVUhIZP1OJaq9PABhD3dSwv748dxP9O7Umo3tnqEuLemjk0OyFFoGX6cql3DtSLMFl77cptzCzxw0BXKPciw6JsIcO+pem4CMKVzDRofdLwMuargC45rBqlQ5f6+i8TFNz0qobs5HGVzgqvT4JIPBBC06gbNRxn9cMDhQ3bKZjgAAAABJRU5ErkJggg==",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
    }


    function Flustrated(){
      db.collection('boards').doc({id:ide}).get().then(doc =>{
        setNotes(doc.notes)
      })
      var n=noteele.length+1
      noteele.push({
            id:n,
            type: 'emotions',
            iurl:  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAfCAYAAACRdF9FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARsSURBVHgBvVhNaBtHFP4UG+JQije99BBqrVpIc2iMWogJxK5X0EDaukiml7YJWKaXNilI7qVJL5Z6aNpTlENCbpLALg0YrFCHtGCwjBMwzaGKXEpxwB2rP9SHVru5RIZA8t7sylqvVpHWkvLBx87M7sx+82bezJvxwTuCFlVbmbCYR5fga/E7jThxUNkfGT3hV4KDL8Lv7995ublpoFDcQmFtC6Jk5KiImUUH0UwoW+6SNjygTX85Am3Ej2bIr2wiM7uG7GxRUDaB5oIVYgymMVSLOrFAvEdMEcXThMbUgf5U+tpYSwKdIMti8pMfSHiJf5S0fu6ESlzC7mnkhmgjoenY2WPRBFlR6e9DO0h8vYLkxRVByRDMeWwHd4KtyZ3Ior4zozAt7So0PX1hRIrsFDKzRbLugqDk6w4xdqGKS9UEzNFAj+PFNFky/s1XIXQS7HyKsl/5aXHjCGWv215ViFFio2HT4CJUpTmZ+3H+A3QDx48dwr21rSO/r/9nUHbVJiQCc0qw87BVq6LZyheq39qHfumXOx9r3PtuQTcqePm1K3pZ3w5YQuLES1Y6YH0WtJ55e9191lOLjB3uqkgGO2bs0yHFEsjIoDY//yCWYa4CVdYJjdLcxLNA7Jz8z4SVZZGTcHemXXkp9KByIFxdK3mHYS/N33kA9L4hmbtZgtjU0Qp0vYLcwrpso1pf/P2C3Ajk38mq2siAitoQ8y6WtDXB+cvEcXu7vURtdPilHfXL1GD8/CJ5qYL5+fdl2dT520hfPQHVr6Cp0AfbGP9wTqaNylsIh8NUfwbKcxs7G0fk3cO8EWgwHQi2JyyReWe7bFEleLQ2NyfODIK8nyyjIxQKSSrPP2x5d+K6E6ePynQ8HkcgEEB+6RambeuyasYJqq2aQG197Xdrly0a5Mar4KFZunUGqSs/w6Bh9JMV4+e8zd/Mtfdkx7IzRSk89tkQ7P/wD9QJTcCckwLm/u4qtA7caOrbk2gH0dODkm5QlAP8sFuOhz5MnEL9NouGQhnsPFmKgppBlJ7uZOGxV0FLX13bBMNWlLLYECxUcKTjRPLibdNz20Ru4T4if33u9krAA1hogQNeJ+S6+vgx2oX2Zr0TLq+U+CHgAXILpXW0/P+fU83Xng4h9M4ML08cSRVarSMX/LL+8EZ1Qe42eH6SSAEPIhnVLTRDwS2eBbLfSQdNwCOqQvPUy3y3rcrWnP3+V0HJZXjEPls6SVG4DMW6hQSN2v2NcgIeHYlhD5yFbmwb25VHp06dfAWdBk+ty1fvZrA7AGkZzqPI6urdfwI+H4J7OXk2Ah2dEf9iUcCMiPY0ZD0uZTmarwHDqASPDx1CX18v2gFbkkSyh79N/Bd7RE+D8hxZ1nd97jcZ9bcS3jnBjjP+0RxfRnDYNtmOSEazmxKVmKZAV4udHarbs91g3pQUOU4QlsA8OgAvd09RunsKjw77ZfzqvHvi4OTGzXU+uPEwJ9HhC7NWhdqhwYwdg7YygdqRt7Uzi0c8AbVUhwyIX+75AAAAAElFTkSuQmCC",
            content:null
      })
      notes.filter(note =>{
        if(note.id===noteId){
          note.noteele=noteele
        }
        db.collection('boards').doc({id:ide}).update({
          notes:notes
        })
      })
  }



    return (

        <Container>
          <div className="appWidth">
          <textarea rows="1" className="Header" onChange={changeTitle}>{notetitle}</textarea>
         <img id="Emo-Frame" src=''></img>
    <div>
      <Button id="PopoverClick" type="button">
        How Do You Feel?
      </Button>
      {' '}
      <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
        <PopoverHeader>Emotions</PopoverHeader>
        <PopoverBody>
        <button id="Angry" onClick={Angry}> <img id="IMGAngry" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAfCAYAAAB+tjR7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU+SURBVHgBtVhPaBxVGP8lLSQWNLMoFEGS2R6qqGk3B73YkoniwZqSLenJFHZXL00rbCKCtpfdXCLx4CaHpqfSBBIsgmRXU6u0sBMTERSykwRFKySzxUPjwUwUNBUh/b6ZN5uXzU529k9/8DGz7828+b3v/b7vfW8b4B8aWSdZiE1tbVG50drcIntg0K1JppNlxH0tiIqxTLmxwceLYbK4dqJVC58+is4TbVDbWqC0NBceYMLG8jqWVtYxMbUMY+UPnZonyCZRORJkSTiTDvslyx5MhbuPavELL0E72Qa/0OfzmJheweT0cpp+DqK0p1Uen8wiG5KeWRN9Q4J0WbLxI6qSvDb+plIJyWJMTC9j+OPvzN9WN5hwuqh7QJB1cUYQzonfQfiQQSLUfjg5c+MsSJeoFea9TXS9McXXKPbKgtt42VUy1n1MIhuA43WIfrOYbJyIjmZv9e3SZB0Jd8EJHBmsyxmJIMtAwU7AqnCCW2+UXlLJk6Ps0XoStQemFcreOoeA0jQjPi5DEVdL2KD7GhzPa27/Aeml3MynZ5XQscN4FGAHNDUfbP7mzioHrisH9upVMvbODTgZwBD9vOq/kM2RXSIbcT0bjfYdU2sJJj8YuPAyZZVWDY633OV3l5wJZsm24eiWr6xhDkSd33fJJhKXT9o3nC8p5aBesKwtDH00b+di+0OX7O8kBEFTEGFS17Gz5IogeV0e6yBZiBK+6kZ+7PyXnNRh/PwkUiOngf8XURUan4b1z/MItvcSYQvKE82IX3TytdLSpNGuZ8JJT4woRMTD0WxITIjbx+BIw/ZsONz9bOEbHLkM9UgHKakXOPQ+xq6uFDxTDmbewuRn5IND70J56lWEQiG73aDdzQVJji/y7tQjrktw8nFSkEy7RBns2c5OSascYPr8PSSTSdsjhmHAWPwW8f52+CJLk42+M26Pwe/rum63k1YLzxx3gjgkveZmBENqGygemyNubfvvy6rbwJrtOjXFxUnhIcoSoG0XfjH4wW2Mjv9Y+E0ys1OXPKHgC1fkvZ+JRbCzi5VEA6WU7Y3f39vVyINlZn+179nrtFFAnszcQh5reUcuAUpJneS14kzC9cEcebdUH0sq8MwnJnY06wsNFFjbaz9dLPsgazHWP2svbylwgCYpo0QcPZb/8OPDJiok27j5139WuYeYaMcr1zyJ2s+wVs/P2hIoO54TxGW/W4yDG9a/Fi2L4rXFcp7sOjW9S8MyFEVBJBJBMOg4iQNqjPTKZaUn2bxVHVkyg3TouXulb94tpLNikolEAgMDu4OWiXeEniM5tHvWGGK8JVQIzrNzc/ss79iVH/a0qaqKXC63hyiDJxGN9WNyasVzTA4+OFtrxWTT+kK+ZCcvF+9mxUilUjZhL/T09MBrTMYXN++yBDKoECwDkwJHp9lqxVLwWv5MJmObF+zNZHm9ZB+fHjasB2lUAbf4JqKt2exX53Z/VBwEqwHrtVS5SZsBO2HPkcUP5JNCdnTkdW2/KK4VXH0lh+f3HAT9QiarBpTHcosLMUVtU1BvcFBRCjTpliqkytMWQz7WmJRzz3BOFXmwbmAp9fZ9btItn8GqHryx6LdOeorVkzB79LXuafPPja19ixQ/aCzRNkGEO4IvjptjUuVUKXjnG/zwtr30RJQ9aqBGHPBov0+W+frOaoCOOKGAUjqyvUiOpL7HW2+nLUqJI3COLPdRB/j5r0slS1JVFdFEuddGFZb8BwjXDVw2sjYzlPApj3KVP4oa9FktWRecIjRhx0Wbip2DHy8z7/c6HhEeAlmXG/sO7437AAAAAElFTkSuQmCC"></img> </button>
        <button id="Happy" onClick={Happy}> <img id="IMGHappy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAgCAYAAACVU7GwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAURSURBVHgBtVhfTFtVGP+VzdDEOS4+CA8KF5KZGBktMTPGSXbrJHETTQ1kyYSkKk+yhxYfFPWh5WW6p5aHMfbUNhnGB5e2cWP+IbaEaUyMobDocA9w2/gg2UNvl5gUF1a/79DWC+29tAV+yZd7zj3nfP3d75zvd84pUD8kMhkHAEsNfRUyJ9mpZqlRbjpqleS2JqjpLLIPclpG20hS2xJZiCyJPaAaUm4yj/JKm+wa7oaz/1lITdayTsnldSTvrCN8bRmJ22kmFSALV3KYP3fOi3zeQ0Wt0I8/ViZT8fDhe2ak7GQR9+gJ2fdpb0UiRuDo+S4uIDyzHKXqmPixIqHBQQUWS9xw8KNHkw0GTW6amsX47JAcuNRXEyEGT2touh/B6X7nsc5mJmAvNVossulgi8VWiZTXfrwlsPjzCJTeduwF7w514/tv3pH5A7G1JilUedV0UD6/tHP6nEQoEr81VHN0zMDTefqNGW1V1RxUTeYHBgJoaHBX6kpryqGPlEyh9ke+GtxXQsIxTef1mQGWkAhYSjY3fSjPUEHIEo2qelK+zz46yaHGQcDe3QLfJ70yFT30wxoT0BErEeJKcfoUSvl4/NawqIRmlhG7cU+UWQJctDZqgabl4Pt8AbGb90SUglf6IbdL0LI5dHZdZk3rwJYcgKbSSZFLCKIFHCo8fZQpdh44Qc7GPp5D7t8ncOXq12h9+lWs/BEn50dQLZ574Sq+m1uF2zOOwGQY3/54H9LjabS2HEEut2klHdugbgnuO3H37srEykpOP56nj5XZVcy0EImfiJDTCbvdLiw6ex/VIrGQEgubwWMlSaLnS5ic+lW8c184wQ+XmY/D4KnTpX7RYSgUgizLUFUVsdg8Ahe7UCvGxsaQSqWEL+Xlx8Q7TiKlt01OLKRl6ERVD46UnTqVXhTLmqbB4/EgEAjUpFe8oKWmRlHmD2IfyWRSvC/1OS7KNiMfTEpu12VccPpN6DOQEgD+S6+hWnAk4rPDJR9M0P9F37ZkKbR1GPng6WuX26RtA9Z+vwA1VUoGkU1s1RNrxOJPIyLbJMlapntNkqhLZqQqgjMxduNPOM9fRz3gLYYyGvWApy+lprWKjbbuVtSLwrqpiOxW1DWjdo6UlkpRxvWWN/JU8lRo2Q2YQVEUkalsDE6OUybJUcjwNaN2jlSCD2dG8Iy+aNjmdruRyWQQj8cRDAbh9XrhcrkgHc1Ttj1lOK7we0tG7bzNSLQQM5m/PqzYgRdrx/OXy6IViUSEwG7rSzLS09OD4NRJQxnhBOromlJhkn0Nwlc2l2AlroRiihe1h+H3+8sIsSY5HA64zj9jqmu0xfAjDBP8vyH30oY8O2zYkdeB48w1aA8s8Pl8sNlsIjKs2NFoFOrqosi23YSWo06+OErqbqQYRGpI2c0pR3R+IV3SMbutBTbKtGpUnzd7OrtPUNFn1k9PSu6UpcXfbr8v7fchj6FbSz0wkQOG/pCn0nF1wnF2BgdB6HT/l0zEsRshxqEd9V/+Xv/HsnRnXXm9rxNW62HsFUyIP3Qtlf0AhTPUbjC69/lIOL20xsR2Uy94/Y2M3uQLw9vVEmIcMvJHujRPBzPFYhGHQLGxVguOjmf8B4yNzyUyWu4MarzGV3Nt9zzZbHW/dfaYzMcP3tMqEeRTRJTO5HQrpgilVWxlWBh1oJY/OJwFs9GBzV4UU1Z6Vn01lVWpGiPjq3oCe0AtpHZC1pVV7CP+A4U0/mODqjPgAAAAAElFTkSuQmCC"></img> </button>
        <button id="Anxious" onClick={Anxious}> <img id="IMGAnxious" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVUSURBVHgB1VhBbNtUGP7tTtouqM6FHZBadwdOa5ccikAiqgucYKie4ICUSUk5USbR7ITKJc5lFQfU9NBqHCCpROGCSCu6gcRYUnUSEhOa2woJdqBOTxQOdbisk1jM9z/bmZcmTZymSPukp2e/OM/f+9//f//vR/SUQKLwUNE0rx/0xqpoO2ibaCaaTT1Gp0QVtGm0VHT4WXUsPkhDg/3U33+m/kClUiVza4/KdypkVx+uYGgJbYV6hHZEBcGIcjr9wdQLSvrKKCkBcq2wsvY7zS/cBeldC7eXyLVyS2h5h98TLU9KZeqCaBStOP3+qGp8FO+IYCPM7T269M7XZO1WDdxmg7+9UnCK/I6aQzFZopJ3Pd6KbCuiyXOqkvts8Q1Fiw/ScWFc26Ds7AZbdZw8/wVRh/uaRLrsUI7Y5x26WiMq90k098gRC7NkuBvGcqeazKurA/2FH28kCD31ArwjQBRkSz5ZsLRhJUWuUcSRSPEthj6N3zRY2XK8wMVCbLlhThWWzJe+u9wzkkGymZk4u9OcN2R6zOYkNxaIrUmPCav+OPGCGuYrfTL7mtJrkkGyWnwgRWw1bLPjuoEgg/t5+KcpeQtwXAmMigXIdC9INJVKjKj6xefpJJG//iZBRTIgZYFcDIyy8NMUiBmCFFEB15b/PK7NclJaDQbTzs6vV9STsmYQWQSXMbvBwWLwPQKLk4WKqB/iBUCuVA4iSab9RzVawpjtE2Vr5vPXL9YnY/G2qwfCV9VBhbqFbR/Qyo37Yh5fQXjec+cX7H37YcQj6ioA5EmWaQxm1D2pqmc4P+qTycSwuLAqNo2/vszaJ+75BcWv3qboyFkKC0S5kCYf8E8q3bwsNPnC8FmlvLGrUSCABBzXyrCojq7gD7OPcvBo/mqxJYKkoigwcwpPRARxtkIY8IJ9kpqmka7rBGJi2xnJxAh3usvN1VbZlSMBBNB+cD62aDRorU1sOVvRMDKUBFHbhoXxIqvyD6zaeXZC+hTz8IJLt4tiLJe7QJu/uNeeYca8xznSNWhSvj5BTRQ4dbCPpoyZeD7jivL/CumZa2zJCIInKiGN1nUTSnB7UjKCz7JF1TB5vLxRofnFu6JHlSTGlP7TwocRkP6WdgRYXGE3Y/0E2Zjj6qbdLN+f8l/UDhy9V2duUeGLrcO/gTD7Hzf2y9LNRGilYFmigH42QvZf1A6TU2tNSTaCLSRUo9Lb2pmJWtbu0ZMWlrdQY95v+hsHSyaToVKphIyxI1pyMi0W1g5YVMer4a03uW48CtmAFgbBkpPP5wXZIAzDoPH1deHHrcpEc+tP0VGHEBbd3P675cr4Zb74BzE9PU3FYvEQyeAiVlvsAmMd/kz0pAS1I4pU9sBkQs3AutoIVVWF1Y7CxMSECK5W4LRKIb6p/BSaRbrTmm2Tuf3XoTFOArFYjNrB3q82HedAwyIsakyfR+CJ6gmyojaS5dTJ0tQtmslU6r1vaWl5O0Xul2pHCBLVUTQUuWg4SbA1h84vWrgcCvO/vsD1bwgaLaKcUV8cfY5OArwzL726xLrNn9BWmP82fopMpj/8wWoVWMcFayuMwQVzmUKikaiFNv5W4hvL3NqjXoJJImnMk1fVh0VfkzH7wcG/q59+fk9HRXPs73q/EP/+1h9MMk1doq/FOCeAVUhIZP1OJaq9PABhD3dSwv748dxP9O7Umo3tnqEuLemjk0OyFFoGX6cql3DtSLMFl77cptzCzxw0BXKPciw6JsIcO+pem4CMKVzDRofdLwMuargC45rBqlQ5f6+i8TFNz0qobs5HGVzgqvT4JIPBBC06gbNRxn9cMDhQ3bKZjgAAAABJRU5ErkJggg=="></img> </button>
        <button id="Confused" onClick={Confused}> <img id="IMGConfused"src="data:image/png;base64,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"></img> </button>
        <button id="Excited" onClick={Excited}> <img id="IMGExcited" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAjCAYAAAAJ+yOQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVUSURBVHgBzVhPbNtkFP+5LWqRkOpyoLvQepMY/5bOORRNaKXOgcPGoEFMHKhQEnFhq0SyE7ADSTkwOC09bOqBqalEEUJCaaWWC0JxVWASPThtAUElFqdwoDtQR4Bopa3Ze46dumkSO9m67ic91Z/9xf5973vv995X4IBQ/AWXyXLFFShuc9twUCgiDAEiHkKn29QWHABM7zFBc4Alt/mNelImGyQ7TOb0QJ4sa5nu+hbBfA8jKzztPt8LSV5xlCymnOwRlYFe9PZ2QurZ4bi0sg5t+SbmF/LQ1woq3UqRTdZ8YwuGzL/bmIcHCHAh1yW2x94595wYG+mH2NkBN6hENDW1gsmpZZ2GMbKZyjmUMEWLbFB4CjNFrbT1gh8GGiApkWWi5/ulxMUBT+QqQR5F4NRn/DdBw9EyQY7HVmTMwRa6wM5oN8cijQ9XI1otcWTynpb5elhKfvJiUwQZHA65n0cQf38gQcM0YCVKS1lyVAdByfJtVVTGpHREEjPfzg2Lzpi7G/BOEIKjlxbYQ5Hyg23K6h2CBlmg1nY7PSmRZb76/LV7RtBJNHa+P0yXl4VnkSCCfvqyuIvgMWQpNiW2yt87YzJFWxOyVn7PYRQ24X/+GsdogIZq8SeSoRbErcciEZXL2tkGv3DUlLNdJCXyXo5jaD/BmR84PaXSJRNFcRlBIpSumKYTq4BTP+3tTuyXB51gjVUGehS+NG/cpuTZxphlETO7nyGrEHj25B4vqiVRNjOUX9wMDGMT03OrpjrIvscg9Yrld9veJL0MopT5WVPYi5jGLapCFQnE2a0Ezxwt36AsROKjhfI4POzDxPjLaAR63mAi5kIZTJQkDXJft7lokjh5w9gSiZho7SXHJ5fKKGkoi71KhOfpuSr4oPKUoSGLJK/SJhgOhxEKhcgbf2B6dhWNIHJutrQTkkRxlIDsP4HI27Pl5y+cNN0qU0anaMsDRIjFXnW8ghuQOIs+Ec6wJyVeYdlzb/goCB7GxKcfmOOkr5My8wYawXFfN6THOxGKRKAMDiI6MoAL0Vj5uZ+ez8yusudMT9kEzfLYSgRbTJKDViMicUxuFP+5KOI+IjW1zJ5l7yXqzbNrehslx30l6IBrRtoJVLdV4wSYpI6mGUjUzoWG++pNKcAj2ijAdWBvKWJwlUhcWkAzoN6zJskCyRO/Hh7B2a3r+eqLkvsOkXy0oxk4k7ESljRp8AgmuTRTR2LqfYyhKAqSySQ0TUMulzON7w3WKQIsdfxdNEByenrut5oTqOmoel8URaTTaWQyGUSjUciybOoiQ7+hwVkgnOA4z67c9HYWcpBU1YU1g+OvGrhCVH6QybDngsHgbgK6jkAggPQXZ2t+0IrxJBqA3WCMjV1ZrDlpYvwMNwY7H6IqYnvNRiqVQkA5gfi7x6hWVw8R9uIP1//U6dLTAcyG3aqxVmra929J9WKQRXiUyqZ0xF8maRi0fdp1yuZuxKmTqtcwX3jvGySvLLqKeC2SDIUIZrgRcDvXZJfXYYcHz2VNdPuN1f3oKJ3ZG0Kr41r/a/0/YX39X+qKnqz7o0Pdj5itFxtfd3TUP77zNr/+Zlr/e2OTm13P+liNJEOlzBPya4YrUa9gr7909kvj95xxioa/ognUOncnKLbivPV2s9oMxq7+iA8//o49+Cqwc2ZpFK017qtGYSs/dnVRFuhwxMkgit7P3xx/3FOOX9PU/zdv8RbruAsILs/ZjbFHuzpCr5x+QhqiEOCaXI0wx90MHRe4QSbdVYE9jey+kXQiaNlxqucyhwHXda7DhcKmQccB3s55i5iKBwSlw73975N9xB0yivyhNRUJ7QAAAABJRU5ErkJggg=="></img> </button>
        <button id="Flustrated" onClick={Flustrated}> <img id="Flustrated" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAfCAYAAACRdF9FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARsSURBVHgBvVhNaBtHFP4UG+JQije99BBqrVpIc2iMWogJxK5X0EDaukiml7YJWKaXNilI7qVJL5Z6aNpTlENCbpLALg0YrFCHtGCwjBMwzaGKXEpxwB2rP9SHVru5RIZA8t7sylqvVpHWkvLBx87M7sx+82bezJvxwTuCFlVbmbCYR5fga/E7jThxUNkfGT3hV4KDL8Lv7995ublpoFDcQmFtC6Jk5KiImUUH0UwoW+6SNjygTX85Am3Ej2bIr2wiM7uG7GxRUDaB5oIVYgymMVSLOrFAvEdMEcXThMbUgf5U+tpYSwKdIMti8pMfSHiJf5S0fu6ESlzC7mnkhmgjoenY2WPRBFlR6e9DO0h8vYLkxRVByRDMeWwHd4KtyZ3Ior4zozAt7So0PX1hRIrsFDKzRbLugqDk6w4xdqGKS9UEzNFAj+PFNFky/s1XIXQS7HyKsl/5aXHjCGWv215ViFFio2HT4CJUpTmZ+3H+A3QDx48dwr21rSO/r/9nUHbVJiQCc0qw87BVq6LZyheq39qHfumXOx9r3PtuQTcqePm1K3pZ3w5YQuLES1Y6YH0WtJ55e9191lOLjB3uqkgGO2bs0yHFEsjIoDY//yCWYa4CVdYJjdLcxLNA7Jz8z4SVZZGTcHemXXkp9KByIFxdK3mHYS/N33kA9L4hmbtZgtjU0Qp0vYLcwrpso1pf/P2C3Ajk38mq2siAitoQ8y6WtDXB+cvEcXu7vURtdPilHfXL1GD8/CJ5qYL5+fdl2dT520hfPQHVr6Cp0AfbGP9wTqaNylsIh8NUfwbKcxs7G0fk3cO8EWgwHQi2JyyReWe7bFEleLQ2NyfODIK8nyyjIxQKSSrPP2x5d+K6E6ePynQ8HkcgEEB+6RambeuyasYJqq2aQG197Xdrly0a5Mar4KFZunUGqSs/w6Bh9JMV4+e8zd/Mtfdkx7IzRSk89tkQ7P/wD9QJTcCckwLm/u4qtA7caOrbk2gH0dODkm5QlAP8sFuOhz5MnEL9NouGQhnsPFmKgppBlJ7uZOGxV0FLX13bBMNWlLLYECxUcKTjRPLibdNz20Ru4T4if33u9krAA1hogQNeJ+S6+vgx2oX2Zr0TLq+U+CHgAXILpXW0/P+fU83Xng4h9M4ML08cSRVarSMX/LL+8EZ1Qe42eH6SSAEPIhnVLTRDwS2eBbLfSQdNwCOqQvPUy3y3rcrWnP3+V0HJZXjEPls6SVG4DMW6hQSN2v2NcgIeHYlhD5yFbmwb25VHp06dfAWdBk+ty1fvZrA7AGkZzqPI6urdfwI+H4J7OXk2Ah2dEf9iUcCMiPY0ZD0uZTmarwHDqASPDx1CX18v2gFbkkSyh79N/Bd7RE+D8hxZ1nd97jcZ9bcS3jnBjjP+0RxfRnDYNtmOSEazmxKVmKZAV4udHarbs91g3pQUOU4QlsA8OgAvd09RunsKjw77ZfzqvHvi4OTGzXU+uPEwJ9HhC7NWhdqhwYwdg7YygdqRt7Uzi0c8AbVUhwyIX+75AAAAAElFTkSuQmCC"></img> </button>
        <button id="Sad" onClick={Sad}> <img id="IMGSad" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAYAAACxHzfjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT/SURBVHgBtVhNbBtFFP7WiZS0SHjNoeVQJZtILRfiWEithNqQDRUHoBUOnKgRscWlSRCxJUClHOKIAz8HEh9aUC+2pQapB9RETXpBwhtSiYoK2SQgQSI165xaJMi4P2rSQ7fvrbPOxl4nG8f5pPHuvp2Z/fbN9968tQR3kKkFqXVTC/jkJsX7bDPbULi3KlbEWo5O/6A2QU1DnSFhe3JDRCr6/hm/HDx1BAH/Qcje5k2d9OUCcnN3MDG1iPT4nE6mOLU0XOJk2hgyDISfGOjVIpK+E5JMLv5R/zE5Oni0glg1MOHU5TmMfDmr02UMRe9uiZ6UkSEiKgxEfo5IqfL7Hocx7L1kX8g/dvvPQTl+vss1QYbS4gWPWfprUAn4D1wl0zB2CSdPZoc/6wrwg+qB8NlrJIH5OJ2O2O2vpoxROgR5iSUJo5YnJQ+8tPQBssdo6QX3LffkaD0JMlLfn0ZfqCOOMo8aFIB0UDzF44bdwBi/G9+zbHaSQ+GQP1pPghbGvn6NAu5AHOwt9xDWiUVSOdzuiw7vAUEGazr53Wk+TaIGWCTjn396XGHR7xU4dVEwKnTa53aMmjQC1FgSkNsV+S2aoLKX5MPMr/s5ncAtYud+Qs8bl5GbL1TcW5dSuOIxNv3ZoHgkZM1GF8FXjrfI9rvabB7azUPAMx+j9XAIYxduwS04R2qzy0hcegjs/xBofGnjqbRSaleLCmdSm+DZ6CMzSZWir3Sz6IlxxD65BE3TkEgkIAqr2Cl4rPbLP0hfeWB61kLwzSPmQbIFhg2yg0000k8n68VC67ouc7kcenp67BO7QnTgGOIkD13XS+NHKbotKK3m/J2UB9O0lOIJvY9nIz05k/TJ+xT7jsIPEWINiYu/kQfXoJ5oweg3Gw/R8wKT0wtmH3NWuQndJ1phvShnCPZ8anzOjOohmi86cLQ0vtP/vMmVEjVvl+aWSYm9NL0DSUikE4O2MGwHJhfpnzL15gQmefWHd8hT8pbz8Av4Dn2r02mbZSOSS0ycdxyKIjNN8U5EnuZtVffABZgg67QaQUZu7i7aXrzIVRDcTOmiT0mzjffuP+YByla9mSBXN05QVRXBYBBeb1HL8ZERdHYchF3nm9jlBXaKxv9XHgk9X7AEXQHWlhNBRVGQTCZNkuX22Lk+ZK6/5zgf6xzFArkELiZ4D18PolJX/iG1CrbNzFBerAan5WMi2Wy2giDDtDW0V01bk1MLfMjabRxEVEfGy2w51qXB2qTrCe1Gda056TCTyVBUVw+QQCCAyWsLjvcmiiRnqgyVy8lzpc55UpucXhT05nJ5ccufBE6w8l81CCEQ7e+osPNORtLRUD1wrCXedJ9JYkU8SiQu3Bour4IClNOM++dRC5yWO1WUzki1Mew1KijaULYbWZW5/JxvX/b32YiyXZ6rFUwwcnaKk3cvdggrmARFeaT3zI/YC3Da+eKrG+ydGGpAg32uO3cfSvlloQZPvYB6QYhVvHwyjaV84V26vIka0FB2reXm/zWJql2taG5uxG7AHnz97Sv4e/E/9mAKNaLad3ec9vThzPUQatUoR/IHA9Piti4icPHtvRW2+nNAoZYJhzoU+oJ0TZbJcSVP+VWjSyaoY5fY7m8WRphaH1fUKpVk3V0tZgkme5tKHUgiJjku4WiL1VBMMxrqBDckLSgofpLyd3Knzc5Ry/sq/2k1AeeKe1d4CntF5/ON/FclAAAAAElFTkSuQmCC"></img> </button>
        <button id="Heartbroken" onClick={Heartbroken}> <img id="IMGHeartbroken" src="data:image/png;base64,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"></img> </button>
        </PopoverBody>
      </UncontrolledPopover>

</div>
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
                //switch(a.type){
                if(a.type==="image"){
                //case 'image':
                return(
                  <Card id={a.id} className="picture">
                      <Card.Img src={a.iurl} />
                  <button className="deleteButton" onClick={()=>{deleteNoteEleFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                  </Card>
                )
                //break;
                }
                else if(a.type==="textNote"){
                //case 'textNote':
                return(
                  <div>
                    <textarea id={a.id} className="LNote" onChange={()=>{textNoteHandleChange(a.id)}}>{a.content}</textarea>
                    <button className="deleteButton" onClick={()=>{deleteNoteEleFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                    
                  </div>
                  )
                }
                //break;
                else if(a.type==="emotions"){
                  return(
                  <Card id={a.id} className="emotion">
                      <Card.Img src={a.iurl} />
                  <button className="deleteButton" onClick={()=>{deleteNoteEleFromDB(a.id)}}><img src={DeleteButton} alt="Delete" /></button>
                  </Card>
                  )
                }
                })}
                {/*<input type="file" onChange={handleChange}/> */}
                
                <button className="addTextBox" onClick={textNote, getNoteEles()} > <img src={AddNote} alt="Add Note" /></button> {/*add button*/}
                
                <div className="sbs">  
                  <div className="file-input">
                    <input className="file" type="file" onChange={handleChange}/>                         {/*select file */}
                    <label for="file">Select Image</label>
                  </div>
                
                  <div className="file-input" >
                    <input className="file" type="submit" onClick={filePost, getNoteEles()}/>                         {/*submit file */}
                    <label for="submit">Post Image</label>
                  </div>
                </div>

                
          </div>
        </Container>
    )
}




export default Newnote;