import React from 'react';


function Box({ i, set, pos,rook}) {
    
    const clickedHandler = (e) => {
        e.preventDefault();
        const val = e.target.innerHTML;
        set(val);
        rook(val);
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