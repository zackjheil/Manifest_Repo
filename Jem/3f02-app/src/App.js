//import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';
import MenuBar from './MenuBar/MenuBar';
import Boards from './Boards/Boards';
import { CardGroup } from 'react-bootstrap';


class App extends Component {
  
  render()
  {
    return(
      <div className="App">
        <MenuBar />
        <CardGroup className="CardGroup">
          <Boards title="Board 1"/>
          <Boards title="Board 2"/>
          <Boards title="Board 3"/>
          <Boards title="Board 4"/>
        </CardGroup>
      </div>

    );

  }
}

export default App;
