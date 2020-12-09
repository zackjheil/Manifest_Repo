import React, { Component } from 'react';
/**import logo from './logo.svg';**/
import './App.css';
import Menu from '../Menu/Menu';
import MenuOPS from '../Menu/MenuOPS';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MenuOPS />

        
        

      </div>
    );
  }
}

export default App;
