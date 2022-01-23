






function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 500);
  angleMode(RADIANS);
   
}
var tim=1.3;

function draw(){
  background(0);
  translate(width/2,height/2);
  
  noStroke();
  for(var i=5;i<400;i++){
    // console.log(prim[i]);
    push()
    rotate(i/tim);
    translate(0,i/tim);
    fill(i,500,500);
    ellipse(0,0,map(i,0,500,3,15),30);
    pop();
  }
  tim+=0.0003
}


