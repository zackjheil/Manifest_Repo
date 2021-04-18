import React from 'react';
import './Layout.css';

const layout = (props) => (
    <div>
        <main className="mainContent">
            {props.children}
        </main>
    </div>
);

export default layout;