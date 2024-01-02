// Get the container and square elements by their IDs
const container = document.getElementById("container");
const square = document.getElementById("square");

// Initialize variables for rotation, position, and direction
var rotate = 0; // Initial rotation angle
var posX = 0;   // Initial X position
var posY = 0;   // Initial Y position
var direction = 'right'; // Initial movement direction

// Function to rotate and move the square
function rotateAndMoveSquare() {
  // Check the current movement direction
  if (direction == 'right') {
    // Move the square to the right
    posX += 1;
    // Change direction if the square reaches the container's right edge
    if (posX >= container.offsetWidth - square.offsetWidth) {
      direction = 'up';
    }
  } else if (direction == 'up') {
    // Move the square upwards
    posY += 1;
    // Change direction if the square reaches the container's top edge
    if (posY >= container.offsetHeight - square.offsetHeight) {
      direction = 'left';
    }
  } else if (direction == 'left') {
    // Move the square to the left
    posX -= 1;
    // Change direction if the square reaches the container's left edge
    if (posX <= 0) {
      direction = 'down';
    }
  } else if (direction == 'down') {
    // Move the square downwards
    posY -= 1;
    // Change direction if the square reaches the container's bottom edge
    if (posY <= 0) {
      direction = 'right';
    }
  }

  // Set a timeout for the next animation frame
  setTimeout(() => {
    rotateAndMoveSquare();
  }, 100000000);

  // Increment the rotation angle
  rotate += 1;

  // Apply rotation and position styles to the square
  square.style.transform = `rotate(${rotate}deg)`;
  square.style.left = posX + "px";
  square.style.bottom = posY + "px";

  // Request the next animation frame
  requestAnimationFrame(rotateAndMoveSquare);
}

