import React, {useRef, useState } from 'react';
import './App.css';
import Square from './Square.js';

function GridArray({ xSize, ySize }) {    
  //debugger;
  let gridArray = [];
  
  console.log(xSize, ySize);
  
  //TODO; check for each?
  for(let i = 0; i < ySize; i++) {//create rows
    const row = [];
    for(let j = 0; j < xSize; j++) { //create columns
      row.push(1); //if push() is empty, nothing is pushed
    }
    gridArray.push(row);      
  }
  
  return(
    <div className="grid"> 
    {//Draw chess grid
      gridArray.map((row, rowId) => (
        <div key={rowId}>
          {row.map((node, nodeId) => (
              <Square row={rowId} col={nodeId} />
            ))}
        </div>
      ))}
  </div>
  );
}


export default function Board() {
  const xSizeRef = useRef(null); /* useRef() returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ).  */
  const ySizeRef = useRef(null);  

  const [xSize,  setXSize] = useState(0);
  const [ySize,  setYSize] = useState(0);

  function updateGrid() {
    setXSize(xSizeRef.current.value);
    setYSize(ySizeRef.current.value);
  }

  //TODO: add error handling for x/y 
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