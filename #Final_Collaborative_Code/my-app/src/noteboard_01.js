import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function noteboard_01() {
  return (
    <div>
        <ul className="navbar">
             <li className="navitem" id="more_options">More</li>
             <li className="navitem" id="board_title">v Board title</li>
             <li className="navitem">New +</li>
             <li className="navitem">Logo</li>
        </ul>
        <body className="NB_body">
            <h3>Notes</h3>
            <ul className="note_board">
                <Link to="/note_01"> 
                    <li>Note 01</li>
                </Link>
                <Link to="/note_02"> 
                    <li>Note 02</li>
                </Link>
            </ul>
        </body>
        <div id="notes_search_form">
        <form>
            <input type="text" paceholder="Type something..." name="search"></input>
            <button type="submit">Search</button>
        </form>
      </div> 
    </div>
  );
}

export default noteboard_01;