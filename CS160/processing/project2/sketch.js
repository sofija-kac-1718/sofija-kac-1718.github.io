function setup() {
  createCanvas(710, 400);
  background(102);
}
//Mix of in class and p5 references site
function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  from = color(255, 0, 0, 0.2 * 255);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  
  ellipse(x, y, speed, speed);
}
