import React from "react";
import { GameContext } from "@contexts";

export const Popup = React.memo(() => {
  const { isPlaying, maze } = React.useContext(GameContext);

  return (
    !isPlaying && (
      <div className="popup">
        {maze ? "GAME OVER" : null}
        <br />
        PUSH START BUTTON
      </div>
    )
  );
});
