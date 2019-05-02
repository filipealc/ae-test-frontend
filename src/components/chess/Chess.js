import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Line from "../line/Line";
import * as BackendApi from "../../services/Backend";

class Chessboard extends Component {
  state = {
    lines: [8, 7, 6, 5, 4, 3, 2, 1],
    columns: ["A", "B", "C", "D", "E", "F", "G", "H"],
    cellClicked: "",
    highlightCells: []
  };

  onClickCell = cellKey => {
    this.setState({ cellClicked: cellKey });
  };

  setHightlightCells = async () => {
    if (!this.state.cellClicked) return;
    const result = await BackendApi.getMoves(this.state.cellClicked);
    this.setState({
      highlightCells: result
    });
  };

  render() {
    const { lines, columns, highlightCells, cellClicked } = this.state;
    return (
      <>
        <div className="container">
          <h1>
            <span>Chessboard</span>
            <button
              className="btn btn-primary btn-hightlight"
              onClick={this.setHightlightCells}
            >
              Hightlight cells
            </button>
          </h1>
          {lines.map(line => {
            return (
              <Line
                key={line}
                line={line}
                columns={columns}
                onClickCell={this.onClickCell}
                highlightCells={highlightCells}
                cellClicked={cellClicked}
              />
            );
          })}
          <div key="bottom" className="row">
            <div className="col-1 offset-1 border" />
            {columns.map(cell => {
              return (
                <div key={"bottom-" + cell} className="col-1 border">
                  {cell}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Chessboard;
