import React from 'react';

function Box({ i, set, pos, queen, rook, bishop, piece }) {
    const clickedHandler = (e) => {
        e.preventDefault();
        const val = e.target.innerHTML;
        set(val);
        if (piece === "Queen") {
            queen(val);
        }
        if (piece === 'Rook') {
            rook(val);
        }
        if (piece === "Bishop") {
            bishop(val)
        }
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