import React from 'react';
import './App.css';
import note_01 from './notes/note_01';
import note_02 from './notes/note_02';
import Noteboard from './noteboards/noteboard_01';
import Main_page from './Main';
import tempMenu from './tempMenu/tempMenu';
import MenuBar from './MenuBar/MenuBar';
import MenuOps from './MenuOPS/MenuOPS';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import NavExpand from './NavExpand/NavExpand';
import textEditor from './notes/textEditor';

function App() {
  return (    
    <div className="App">
      <Router>
          <NavExpand/>
          <Switch>
            <Route path="/" exact component={Main_page} />
            <Route path="/noteboards/noteboard_01" component={Noteboard} />
            <Route path="/notes/note_01" component={note_01} />
            <Route path="/notes/note_02" component={note_02} />
            <Route path="/notes/textEditor" component={textEditor} />
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
