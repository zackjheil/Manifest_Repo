import React from 'react';
import './Layout.css';

const layout = (props) => (
    <div>
        <main>
            {props.children}
        </main>
    </div>
);

export default layout;