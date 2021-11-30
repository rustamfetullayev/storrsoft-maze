import React from "react";
import { config } from "@config";
import { Header, Board, Popup } from "@components";

export const App = React.memo(() => {
  React.useEffect(() => {
    document.title = config.APP_NAME;
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: "16px",
      }}
    >
      <Header />
      <Board />
      <Popup />
    </div>
  );
});
