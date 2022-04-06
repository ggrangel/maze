import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  leftPoint,
  rightPoint,
  downPoint,
  upPoint,
  character,
  wall,
  visited,
} from "./assets/images/index";

interface SymbolImageMap {
  [key: string]: string;
}

const imagesPath = "./assets/images/";

const MapSymbols: SymbolImageMap = {
  character: imagesPath + character,
  downPoint: imagesPath + downPoint,
  leftPoint: imagesPath + leftPoint,
  rightPoint: imagesPath + rightPoint,
  upPoint: imagesPath + upPoint,
  visited: imagesPath + visited,
  wall: imagesPath + wall,
};

ReactDOM.render(
  <React.StrictMode>
    <App map={MapSymbols} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export type { SymbolImageMap };
export { MapSymbols };
