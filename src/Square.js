import React, { } from 'react';
import './App.css';

function LettersForX(x) {
  let xCoordinate = "";

  if (x >= 26) { 
    xCoordinate += String.fromCharCode(65 + Math.floor(x/ 26)  -1); //65 = A in ASCII
  }
  return xCoordinate += String.fromCharCode(65 + (x % 26));
}

export default function Square({row, col, display}) {
    if (row === 0 && col === 0) {
      return (<div className="square-light"></div>);
    } else if(row >= 1 && col === 0) {
      return (<div className="square-light">{row} </div>);
    } else if(row === 0 && col >= 1) {
      return (<div className="square-light">{LettersForX(col-1)} </div>);
    } else if ((row + col) % 2 === 0) {
      return (<div className="square-dark" /> );
    } else {
      return (<div className="square-light"></div>);
    }
}