import React, {useState} from 'react';
import Layout from './containers/Layout/Layout';
import NavExpand from './containers/NavExpand/NavExpand';
import {Switch, Route} from 'react-router-dom';
import Boards from './components/Boards/Boards';
import NewNote from './components/NewNote/NewNote'
import MainPage from './components/Main/Main';
import About from './components/About/About';
import Settings from './components/Settings/settings';
import 'react-bootstrap';
import 'bootswatch/dist/lux/bootstrap.min.css'; // quick style provided here
import './App.css';


function App() {

  const [notebook,setNotebook] = useState([])
  const [note,setNote]=useState([])
  const [note2,setNote2]=useState([])
  const [noteele,setNoteele]=useState([])
  const [ide,setIde]=useState()
  const [boardtitle,setBoardTitle]=useState()
  const [noteId,setNoteId]=useState()
  const [notetitle,setNoteTitle]=useState()

  return (
    <div >
      <div>
        <Layout>
          <NavExpand />
        </Layout>
      </div>
      <div>
        <Switch>
          {/* *** You may need a trailing slash here. /about/ or /settings/ */}
          <Route exact path="/">
            <MainPage notebook={notebook} setNotebook={setNotebook} setBoardTitle={setBoardTitle} setNotes={setNote} setIde={setIde} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/settings">
            <Settings/>
          </Route>
          <Route exact path="/:boardID">
            <Boards notes={note} ide={ide} setNotes={setNote} boardtitle={boardtitle} setNoteId={setNoteId} setIde={setIde} setNoteele={setNoteele} setNoteTitle={setNoteTitle}/>
          </Route>
          <Route exact path="/:boardID/:noteID">
            <NewNote noteele={noteele} ide={ide} setNotes={setNote} setNote2={setNote2} note2={note2} noteId={noteId} notes={note} setNoteele={setNoteele} setIde={setIde} notetitle={notetitle}/>
          </Route>
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
