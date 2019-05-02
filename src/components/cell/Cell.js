import React from "react";

const Cell = ({
  line,
  cell,
  onClickCell,
  isHighlighted,
  cellClicked,
  blackOrWhite
}) => {
  const clickedClass = cellClicked === cell + line ? " shadow " : "";
  if (clickedClass) {
    isHighlighted = "cellclicked";
  }
  return (
    <div
      className={" col-1 square" + clickedClass + blackOrWhite}
      onClick={() => onClickCell(cell + line)}
    >
      <span className={isHighlighted}>{cell + line}</span>
    </div>
  );
};

export default Cell;
