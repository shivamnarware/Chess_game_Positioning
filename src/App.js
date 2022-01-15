import { useState } from "react";
import './App.css'
import Box from "./Box";
import { QueenArray } from "./Queen";
import { BishopArray } from './Bishop'
import { RookArray } from './Rook'

function App() {
  const arr = [];

  for (let i = 0; i < 64; i++) {
    arr.push(i);
  }

  const [res, setRes] = useState();
  const [rookarr, setRookArr] = useState();
  const [bishoparr, setBishopArr] = useState();
  const [queenarr, setQueenArr] = useState();


  const Rook = (res) => {
    const arr = RookArray(res);
    setRookArr(arr);
  }


  const Bishop = (res) => {
    const arr = BishopArray(res);
    setBishopArr(arr);
  }

  const Queen = (res) => {
    const arr = QueenArray(res);
    setQueenArr(arr);
  }

  const [piece, setPiece] = useState("Rook");
  const clickedHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setPiece(value);
  }

  return (
    <>
      <div className="wrapper">
        <div className="top">
          <div className="wrapper-inner">
            <div className="box-inner">A</div>
            <div className="box-inner">B</div>
            <div className="box-inner">C</div>
            <div className="box-inner">D</div>
            <div className="box-inner">E</div>
            <div className="box-inner">F</div>
            <div className="box-inner">G</div>
            <div className="box-inner">H</div>
          </div>
        </div>

        {
          arr.map((idx) => (
            piece === 'Rook' ? (<Box key={idx} i={idx} set={setRes} pos={rookarr} piece={piece} queen={Queen} rook={Rook} bishop={Bishop} />) :
              (piece === 'Queen' ? (<Box key={idx} i={idx} set={setRes} pos={queenarr} piece={piece} queen={Queen} rook={Rook} bishop={Bishop} />) :
                (<Box key={idx} i={idx} set={setRes} pos={bishoparr} piece={piece} queen={Queen} rook={Rook} bishop={Bishop} />))
          )
          )
        }

        <div className="bottom">
          <div className="wrapper-inner">
            <div className="box-inner">A</div>
            <div className="box-inner">B</div>
            <div className="box-inner">C</div>
            <div className="box-inner">D</div>
            <div className="box-inner">E</div>
            <div className="box-inner">F</div>
            <div className="box-inner">G</div>
            <div className="box-inner">H</div>
          </div>
        </div>
      </div>
      <button onClick={clickedHandler} className="button_Rook">Rook</button>
      <button onClick={clickedHandler} className="button_Bishop">Bishop</button>
      <button onClick={clickedHandler} className="button_Queen">Queen</button>
    </>
  );
}

export default App;
