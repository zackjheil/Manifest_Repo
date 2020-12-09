import React from 'react';
import './App.css';
import note_01 from './note_01';
import note_02 from './note_02';
import Noteboard from './noteboard_01';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (    
    <div className="App">
      <Router>  
          <Switch>
            <Route path="/" exact component={Noteboard} />
            <Route path="/note_01" component={note_01} />
            <Route path="/note_02" component={note_02} />
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
