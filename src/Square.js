import React, { } from 'react';
import './App.css';

export default function Square({row, col}) {
    //TODO: cases for tiles
    console.log(row, col); 

    switch(col) {
      case "dark": 
        return (<div className="square-dark" /> );
      default: 
        return (<div className="square">{"(" + row + ", " + col + ")"} </div>);
    }
}