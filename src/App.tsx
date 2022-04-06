import React from "react";
import "./App.css";
import { SymbolImageMap } from "./index";
import { visited } from "./assets/images";

interface AppProps {
  map: SymbolImageMap;
}

function App({ map }: AppProps) {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img src={visited} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
