import React from "react"

export default function runGame(gameRunning, setEnemiesData) {
  React.useEffect(() => {
    let interval
    if (gameRunning) {
      interval = setInterval(() => {
        setEnemiesData(prevPositions => {
          return prevPositions.map(enemy => {
            // Determine left and right boundaries based on enemy's position.top
            const leftBoundary = enemy.position.top === 165 ? 37 : 112;
            const rightBoundary = enemy.position.top === 165 ? 292 : 202;

            // Check if the enemy is facing left
            const isLeft = enemy.orientation === "left";

            // Determine the next orientation and position based on conditions
            let nextOrientation = isLeft ? "left" : "right";
            let nextPosition = isLeft ? enemy.position.left - 1 : enemy.position.left + 1;

            // Check if the enemy is at the leftBoundary and facing left
            if (enemy.position.left === leftBoundary && isLeft) {
              // If so, move left and change orientation to right
              nextPosition = enemy.position.left - 1;
            }
            // Check if the enemy is at the rightBoundary and facing right
            else if (enemy.position.left === rightBoundary && !isLeft) {
              // If so, move left and change orientation to left
              nextPosition = enemy.position.left - 1;
              nextOrientation = "left";
            }

            // Check if the current position is a multiple of 10
            const isMultipleOf10 = enemy.position.left % 10 === 0; //trigger specific actions or changes in behavior when an object reaches a particular position or frame
            // Switch currentImage and altImage if it is
            const [nextCurrentImage, nextAltImage] = isMultipleOf10
              ? [enemy.altImage, enemy.currentImage]
              : [enemy.currentImage, enemy.altImage];

            // Return the updated enemy object
            return {
              ...enemy,
              orientation: nextOrientation,
              currentImage: nextCurrentImage,
              altImage: nextAltImage,
              position: { ...enemy.position, left: nextPosition },
            };
          });
        });
      }, 20);
    }
    // Return a cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [gameRunning]);
}
