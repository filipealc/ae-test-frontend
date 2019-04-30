import React, { Component } from "react";
import Line from "../line/Line";

class Chessboard extends Component {
  state = {
    lines: [1, 2, 3, 4, 5, 6, 7, 8],
    columns: ["A", "B", "C", "D", "E", "F", "J", "H"],
    cellClicked: "",
    highlightCells: ["A1", "B2", "H6", "C7"]
  };

  onClickCell = cellKey => {
    this.setState({ cellClicked: cellKey });
  };

  render() {
    const { lines, columns, highlightCells } = this.state;
    return (
      <>
        <div>
          <h1>Chessboard</h1>
          {lines.map(line => {
            return (
              <Line
                key={line}
                line={line}
                columns={columns}
                onClickCell={this.onClickCell}
                highlightCells={highlightCells}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Chessboard;
