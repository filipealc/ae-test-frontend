import React from "react";
import Cell from "../cell/Cell";

const Line = ({ line, columns, onClickCell, highlightCells }) => {
  return (
    <div key={line} className="flex">
      {line}
      <div className="row">
        {columns.map(cell => {
          const isHighlighted =
            highlightCells.indexOf(cell + line) >= 0 ? "hightlight" : "";
          return (
            <Cell
              key={`${cell + line}`}
              line={line}
              cell={cell}
              onClickCell={onClickCell}
              isHighlighted={isHighlighted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Line;
