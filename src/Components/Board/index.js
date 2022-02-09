import React from "react";
import Square from "../Square";

function Board(props) {
  return (
    <div>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
      <Square props={props}></Square>
    </div>
  );
}

export default Board;
