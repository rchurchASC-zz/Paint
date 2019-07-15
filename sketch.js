function setup() {
  createCanvas(500, 500);
  drawRect();
  drawCircle();
}
let size = Math.floor(Math.random() * 100);
function mouseDragged() {
  rect(mouseX, mouseY, size, size);
}
function drawRect() {
  fill(color(255, 0, 0));
  stroke("rgb(100%,0%,10%)");
  rect(0, 0, 50, 50);
}
function drawCircle() {
  fill(color(0, 0, 255));
  stroke(color(0, 0, 255));
  ellipse(450, 30, 50, 60);
}
function mouseClicked() {
  if (mouseX >= 0 && mouseX <= 250) {
    drawRect();
  } else {
    drawCircle();
  }
}

