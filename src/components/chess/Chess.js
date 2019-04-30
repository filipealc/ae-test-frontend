import React, { Component } from "react";
import Line from "../line/Line";
import * as BackendApi from "../../services/Backend";

class Chessboard extends Component {
  state = {
    lines: [1, 2, 3, 4, 5, 6, 7, 8],
    columns: ["A", "B", "C", "D", "E", "F", "J", "H"],
    cellClicked: "",
    highlightCells: []
  };

  onClickCell = cellKey => {
    this.setState({ cellClicked: cellKey });
  };

  setHightlightCells = async () => {
    const result = await BackendApi.getMoves(this.state.cellClicked);
    this.setState({
      highlightCells: result
    });
  };

  render() {
    const { lines, columns, highlightCells } = this.state;
    return (
      <>
        <div>
          <h1>Chessboard</h1>
          <button onClick={this.setHightlightCells}>Hightlight cells</button>
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
