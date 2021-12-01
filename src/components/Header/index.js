import React from "react";
import { GameContext } from "@contexts";

export const Header = React.memo(() => {
  const { time, round, score, highScore } = React.useContext(GameContext);

  return (
    <header>
      <div>
        <p>Welcome to the StorrSoft maze!</p>
        <div>
          Hi-Score
          <span>{highScore}</span>
        </div>
      </div>
      <div>
        UP
        <span>{score}</span>
        ROUND
        <span>{round}</span>
        TIME
        <span>{time}</span>
      </div>
    </header>
  );
});
