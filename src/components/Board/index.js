import React from "react";
import useImage from "use-image";
import useInterval from "@use-it/interval";
import { GameContext } from "@contexts";
import { useDimensions } from "@hooks";
import { Drawer } from "@library";

export const Board = React.memo(() => {
  const { maze, currentCell, start, goal } = React.useContext(GameContext);
  const [showGoal, setShowGoal] = React.useState(true);
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const { width, height } = useDimensions();
  const [shouldDraw, setShouldDraw] = React.useState(false);
  const [logo] = useImage("../../assets/images/logo.svg");

  useInterval(() => {
    setShowGoal(!showGoal);
  }, 750);

  React.useEffect(() => {
    const handleResize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const scale = window.devicePixelRatio;
      canvasRef.current.width = Math.floor(rect.width * scale);
      canvasRef.current.height = Math.floor(rect.height * scale);
      setShouldDraw(true);
    };

    setTimeout(handleResize, 100);
  }, [width, height]);

  React.useEffect(() => {
    if (shouldDraw) {
      setShouldDraw(false);
    }
    if (!maze) {
      return;
    }
    const mazeDrawer = new Drawer(
      canvasRef.current,
      maze,
      logo,
      currentCell,
      showGoal && goal
    );
    mazeDrawer.draw();
  }, [shouldDraw, maze, logo, currentCell, start, goal, showGoal]);

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        height: "100%",
        position: "relative",
      }}
    >
      <canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        ref={canvasRef}
      />
    </div>
  );
});
