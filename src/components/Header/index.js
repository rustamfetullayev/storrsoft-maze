import React from "react";
import { GameContext } from "@contexts";

export const Header = React.memo(() => {
  const { time, round, score, highScore } = React.useContext(GameContext);
  const formatTime = () => {
    return time !== undefined ? time.toString().padStart(2, " ") : null;
  };

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Welcome to the StorrSoft maze!</p>
        <p>
          Hi-Score{" "}
          <span
            style={{
              color: "yellow",
              whiteSpace: "pre",
            }}
          >
            {highScore.toString().padStart(5, " ")}
          </span>
        </p>
      </div>
      <div>
        1UP{" "}
        <span
          style={{
            color: "yellow",
            whiteSpace: "pre",
          }}
        >
          {score.toString().padStart(5, " ")}
        </span>
        &nbsp;&nbsp; ROUND{" "}
        <span
          style={{
            color: "yellow",
            whiteSpace: "pre",
          }}
        >
          {round.toString().padStart(3, " ")}
        </span>
        &nbsp;&nbsp; TIME{" "}
        <span
          style={{
            color: "yellow",
            whiteSpace: "pre",
          }}
        >
          {formatTime()}
        </span>
      </div>
    </header>
  );
});
