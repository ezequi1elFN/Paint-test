function setup() {
    createCanvas(625, 625);
  background("white");
  }
  function draw() {
    fill("black");
    stroke("black")
    
    if(mouseIsPressed) {
      circle(mouseX, mouseY, 20, 20);
    }
  }