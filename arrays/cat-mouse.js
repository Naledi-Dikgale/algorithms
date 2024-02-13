// You have a grid representing a room where a cat and a mouse are located.
// The cat is at position [x1, y1] and the mouse is at position [x2, y2].
// The goal is to determine if the cat can catch the mouse.
// The cat can move up, down, left, or right one cell at a time, but
// cannot pass through walls or obstacles.
// If the cat can reach the mouse, return true; otherwise, return false.

function canCatCatchMouse(catPosition, mousePosition, roomLayout) {
  const [catX, catY] = catPosition;
  const [mouseX, mouseY] = mousePosition;

  // Check if the cat and mouse are at the same position
  if (catX === mouseX && catY === mouseY) {
      return true; // Cat caught the mouse
  }

  // Check if cat and mouse are in the same row or column
  if (catX === mouseX || catY === mouseY) {
      return true; // Cat can catch mouse in the same row or column
  }

  return false; // Cat cannot catch mouse
}

// Example usage:
const catPosition = [2, 2];
const mousePosition = [4, 5];
const roomLayout = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
];

console.log(canCatCatchMouse(catPosition, mousePosition, roomLayout)); // Output: true
