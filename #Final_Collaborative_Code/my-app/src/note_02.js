import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function note_02() {
  return (
    <div>
          <h1>This is the second note</h1>
          <Link to="/"> 
            <h4>Back</h4>
          </Link>          
    </div>
  );
}

export default note_02;