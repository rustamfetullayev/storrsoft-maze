In this assignment you are asked to add two features to an exiting maze game.
The maze is built using React and HTML5 Canvas.

- Installation
  In order to install the project dependencies, make sure you have NodeJS and yarn package manager installed.

- yarn install

Then, you can run:

yarn start

which runs the app in the development mode.
Open http://localhost:3000 to view it in the browser

- The assignment
  In order to complete the assignment you need to do the tasks below.
  Please pay attention to code quality and design - feel free to change the existing code in any way for
  better design, code reuse, etc.

1. Prizes:
   In each round two prizes will appear. Hitting a prize will add points and time.

- The prizes should appear at a random cell (but not at the start\goal, the place of the player, or at a cell of another prize).
- After hitting a prize, it will disappear and number of points will be shown instead.
  The number should have '+' prefix (e.g. '+500') and should appear for 3 seconds in green color.
- If the player reaches the goal with time greater than ROUND_TIME, time won't be reset.
- The prizes are:
  Lollipop - src\images\lollipop.svg; Appears after 35 seconds for 10 seconds; Gives 500 points and 15 seconds;
  Ice cream - src\images\ice_cream.svg; Appears after 40 seconds for 5 seconds; Gives 1000 points and 30 seconds;

2. Touch screens:

- Orientation: the maze is designed for landscape mode.
  If the device is in portrait, show 'Please rotate your device' message.

- Buttons: we'd like to let the user play without a keyboard.
  Add buttons for the arrow keys and start button. Buttons can be created with html or canvas.
  The design is up to you, it should be intuitive.

* Bonus
  The assignment was too easy? Have some free time? You can also:

1. If the game is over, show the solution of the maze (from the cell of the player). Design is up to you.

2. Save and load the high score to a db.

3. Add mute button: by now we probably don't need to explain why it is needed.
