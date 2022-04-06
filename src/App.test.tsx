import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MapSymbols } from ".";

test("renders learn react link", () => {
  render(<App map={MapSymbols} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
