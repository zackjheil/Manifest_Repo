import React, { useState } from 'react';
import './Tooltips.css';

const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (/* this is what your implementation should look like!!  example is also in Main.js*/
        <div
        className="Tooltip-Wrapper"
        //When to show the tooltip
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
        >
            {/*Wrapping*/}
            {props.children}
            {active && (
                <div className={'Tooltip-Tip ${props.direction || "top"}'}>
                    {/*Content*/}
                    {props.content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;