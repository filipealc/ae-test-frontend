import React, { Component } from "react";

class Chessboard extends Component {
  state = {
    lines: [1, 2, 3, 4, 5, 6, 7, 8],
    columns: ["A", "B", "C", "D", "E", "F", "J", "H"],
    cellClicked: "",
    highlightCells: []
  };

  render() {
    return (
      <>
        {/* TODO: the chess board will be the one to render
           all sub components (first the lines then the columns) */}
        <div>test</div>
      </>
    );
  }
}

export default Chessboard;
