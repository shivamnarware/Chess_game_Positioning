import React from 'react';
import { useState } from 'react/cjs/react.development';

function Box({ i,set,res }) {
    const clickedHandler = (e) => {
        e.preventDefault();
        const val = e.target.innerHTML;
        set(val);
    
    }
    let x;
    if (i>=res && i<=64) {
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