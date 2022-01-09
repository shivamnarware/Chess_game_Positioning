import { useEffect, useState } from "react";
import './App.css'
import Box from "./Box";


function App() {
  const arr = [];
  for (let i = 1; i <= 64; i++) {
    arr.push(i);
  }

  const [res,setRes]=useState();

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
            <Box key={idx} i={idx} set={setRes} res={res}/>
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
