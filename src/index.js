import React from "react";
import ReactDOM from "react-dom";
import { GameProvider } from "@contexts";
import { App } from "@layouts";

import "@assets/css/index.css";

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById("root")
);
