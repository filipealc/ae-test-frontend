import React from "react";
import ReactDOM from "react-dom";
import Line from "./Line";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Line
      key={1}
      line={1}
      columns={["A", "B", "C", "D", "E", "F", "J", "H"]}
      highlightCells={[]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
