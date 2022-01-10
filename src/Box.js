import React from 'react';
import { useState } from 'react/cjs/react.development';

function Box({ i, set, pos,queen}) {
    
    const clickedHandler = (e) => {
        e.preventDefault();
        const val = e.target.innerHTML;
        set(val);
        queen(val);
    }
 
    let x;
    if (pos && pos.includes(i)) {
        x = <div onClick={clickedHandler} className="change">{i}</div>
    } else {
        x = <div onClick={clickedHandler} className="box">{i}</div>
    }
    return (
        <>
            {x}
        </>
    );
}

export default Box;