import React from "react";
import { config } from "@config";
import { Header, Board, Popup } from "@components";

export const App = React.memo(() => {
  React.useEffect(() => {
    document.title = config.APP_NAME;
  }, []);

  return (
    <main>
      <Header />
      <Board />
      <Popup />
    </main>
  );
});
