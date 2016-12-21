var bubbles = [];


function setup() {
  createCanvas(600, 400);
  for (var i=0;i <100;i++) {  //the number of objects
  bubbles [i] = {
    x: random (0, width),
    y: random (0, height),
    display: function() {
      stroke(255);
      fill(50);
      ellipse(this.x, this.y, 24, 24);
    },
    move: function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
  }
}
}

  function draw() {
    background(0);
    for (var i=0; i< bubbles.length; i++) {
    bubbles [i].move();
    bubbles [i].display();
  }
  }