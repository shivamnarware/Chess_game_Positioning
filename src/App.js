import { useState } from "react";
import './App.css'
import Box from "./Box";


function App() {
  const arr = [];
  for (let i = 0; i < 64; i++) {
    arr.push(i);
  }


  const [res, setRes] = useState();
  const [queenarr, setQueenArr] = useState();

  const Queen = (res) => {
    let a = [];
    let x = parseInt(res / 8);
    for (let i = 8 * x; i < 8 * (x + 1); i++) {
      a.push(i);
    }
    let y = res % 8;
    for (let j = 1; j <= 8; j++) {
      a.push(y)
      y += 8;
    }
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
            <Box key={idx} i={idx} set={setRes} pos={queenarr} queen={Queen} />
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
    </>
  );
}

export default App;
