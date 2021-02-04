import React, {Component} from 'react';
import MenuBar from '../MenuBar/MenuBar';
import MenuOPS from '../MenuOPS/MenuOPS';
import { Link } from 'react-router-dom';

class tempMenu extends Component {
    render()
    {
        return (
        <div>
        <MenuBar />
        <Link to="/">    
            <div className="escapeSequence">
            </div>
        </Link>
        <MenuOPS /> 
         </div>
    );
  }
}
  
  export default tempMenu;
  