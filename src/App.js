import React, {useRef, useState } from 'react';
import './App.css';
import Square from './Square.js';

function GridArray({ xSize, ySize }) {    
  if(xSize > 100 || xSize < 2 || ySize > 100 || ySize < 2) {
    return <div>Bitte geben Sie einen Wert zwischen 2 und 100 ein für X und Y</div>
  }
  let gridArray = [];
  
  for(let i = 0; i <= ySize; i++) {//create rows
    const row = [];
    for(let j = 0; j <= xSize; j++) { //create columns
      row.push(1); //if push() is empty, nothing gets pushed
    }
    gridArray.push(row);      
  }
  
  return( //Draw chess grid
    <div className="grid"> 
    {gridArray.map((row, rowId) => (
        <div className="row" key={rowId} >
          {row.map((node, nodeId) => (
              <Square key={nodeId} row={rowId} col={nodeId} display = "" name = {nodeId}/>
            ))}
        </div>
      ))}
  </div>
  );
}


export default function Board() {
  /* useRef() returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ).  */
  const xSizeRef = useRef(null); 
  const ySizeRef = useRef(null);  

  const [xSize,  setXSize] = useState(0);
  const [ySize,  setYSize] = useState(0);

  function updateGrid() {
    setXSize(xSizeRef.current.value);
    setYSize(ySizeRef.current.value);
  }

  return (
    <>
      <div>
        <label>
          X:
          <input ref={xSizeRef} type="number"/>
        </label>
      </div>
      <div>
          <label>
            Y:
            <input ref={ySizeRef} type="number"/>
          </label>
      </div>
      <div>
          <button type="button" onClick={() => updateGrid()}> Erstellen </button>
      </div>
      <br/>
      <GridArray xSize={xSize} ySize={ySize}/>
    </>  
  );
}