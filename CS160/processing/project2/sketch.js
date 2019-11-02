function setup() {
  createCanvas(500,500);
}

function draw() {
  if (mousePresses){
    fill(0)
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80)
}