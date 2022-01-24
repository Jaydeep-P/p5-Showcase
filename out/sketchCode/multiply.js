function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30)
}

function lineMaker(ar,br){
  stroke(10,255,200,100);
  strokeWeight(2);
  line(ar[0],ar[1],br[0],br[1]);
}

function getPoints(rad,ang,i){
  return [rad*cos(i*ang),rad*sin(i*ang)]
}

function pattern(n,m,scale=1){
  translate(width/2,height/2);
  rad = (min(width/2,height/2)-5)/scale;
  ang = TWO_PI/n;
  
  for(i = 0;i<n;i+=1){
    lineMaker(getPoints(rad,ang,i),getPoints(rad,ang,(i*m)%n));
  }
  
  noFill();
  stroke(10,200,10);
  strokeWeight(2);
  circle(0,0,rad*2);
  
}

var num = 100;
var mul = 1;
var toLoop = true;


function keyPressed() {
  if (keyCode === 32) {
    mouseClicked();
  }
}

function mouseClicked()
{
  toLoop = !toLoop ;
}

function draw() {
  background(0);
  push()
  pattern(num,mul);
  pop()
  if(toLoop)
  mul+=0.05
}