import React from "react";

const Cell = ({ line, cell, onClickCell, isHighlighted }) => {
  return (
    <div className="cell" onClick={() => onClickCell(cell + line)}>
      <span className={isHighlighted}>{cell}</span>
    </div>
  );
};

export default Cell;
