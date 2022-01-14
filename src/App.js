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
    const a = QueenArray(res);
    setQueenArr(a);
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
            <Box key={idx} i={idx} set={setRes} pos={queenarr} queen={Queen} rook={Rook} bishop={Bishop} />
          ))
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
      <button className="button_Rook">Rook</button>
      <button className="button_Bishop">Bishop</button>
      <button className="button_Queen">Queen</button>
    </>
  );
}

export default App;
