import React from "react";
import ReactDOM from "react-dom";
import Chessboard from "./Chess";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Chessboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
