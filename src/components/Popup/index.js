import React from "react";
import { GameContext } from "@contexts";

export const Popup = React.memo(() => {
  const { isPlaying, maze } = React.useContext(GameContext);
  return (
    !isPlaying && (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "black",
          textAlign: "center",
          padding: 8,
        }}
      >
        {maze ? "GAME OVER" : null}
        <br />
        PUSH START BUTTON
      </div>
    )
  );
});
