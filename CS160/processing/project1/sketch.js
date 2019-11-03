let x = 2;
let y = 1;
let easing = 0.25;

function setup() {
  createCanvas(720, 400);
  noStroke();
}
// altered an example from p5.js reference site
function draw() {
  background(128, 34, 93);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  square(x, y, 66, 66);
}
