import React from "react";
import App from "./App";

describe("Testing-app.cy.js", () => {
  it("playground", () => {
    cy.mount(<App />);
  });
});
