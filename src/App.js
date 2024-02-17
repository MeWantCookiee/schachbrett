import React, { useRef } from 'react';
import './App.css';

export default function Board() {
  const xSizeRef = useRef(null); /* useRef hook is used here to create references to the input elements */ 
  const ySizeRef = useRef(null);

  function createGridArray() {
    const gridArray = [];
    const xSize = xSizeRef.current.value;
    const ySize = ySizeRef.current.value;
    
    console.log(xSize, ySize);
    
    //create rows
    for(let i = 0; i < xSize; i++) {
      const row = [];
      
      //create columns
      for(let j = 0; j < ySize; j++) {
        //row.push(Square(i, j));
        row.push();
      }

      gridArray.push(row);
    }

    return gridArray;
  }
  

  //TODO: add error handling for x/y 
  return (
    <><div>
      <label>
        X:
        <input ref={xSizeRef} type="number" />
      </label>
    </div><div>
        <label>
          Y:
          <input ref={ySizeRef} type="number" />
        </label>
    </div><div>
        <button type="button" onClick={createGridArray}> Erstellen </button>
    </div></>
    
  );
}
