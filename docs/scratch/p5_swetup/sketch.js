function setup() {
  let c = createCanvas(innerWidth, innerHeight);
  c.parent("sketch");
    rectMode(CENTER);
  }
  
  function draw() {
    // background(220);
  
    // translate(mouseX, mouseY);
    // rotate(radians(frameCount));
    
    let triX1 = mouseX + 20;
    let triY1 = mouseY + 20;
    let triX2 = mouseX - 20;
    let triY2 = mouseY + 20;
    
    triangle(mouseX, mouseY, triX1, triY1, triX2, triY2);
  
    fill(255,mouseY,mouseX);
  
  }

  function windowResized() { 
    resizeCanvas(innerWidth, innerHeight)
  }