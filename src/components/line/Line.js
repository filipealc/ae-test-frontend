import React from "react";
import Cell from "../cell/Cell";

const Line = ({ line, columns, onClickCell, highlightCells, cellClicked }) => {
  return (
    <>
      <div key={line} className="row">
        <div className={"col-1 offset-1 border"}>{line}</div>
        {columns.map(cell => {
          const isHighlighted =
            highlightCells.indexOf(cell + line) >= 0 ? " hightlight " : "";
          const blackOrWhite =
            (line + columns.indexOf(cell)) % 2 === 0 ? " white " : " black ";
          return (
            <Cell
              key={`${cell + line}`}
              line={line}
              cell={cell}
              onClickCell={onClickCell}
              isHighlighted={isHighlighted}
              cellClicked={cellClicked}
              blackOrWhite={blackOrWhite}
            />
          );
        })}
      </div>
    </>
  );
};

export default Line;
