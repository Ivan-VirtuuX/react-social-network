import React from "react";
import ReactDOM from "react-dom";
import VirtuuXApp from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VirtuuXApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
