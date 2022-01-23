

var a1,b1;
var currcol;
var rot=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  // frameRate(600);
  background(0,0,0);
  a1 = 200;
  b1 = 190;
  currcol=random(300);
  
}

var i=0;

function draw() {
  
  translate(width/2,height/2);
  for(var framess=0;framess<max(20,mouseX/10);framess++){
    stroke(currcol,300,300);
    strokeWeight(5);


    var offset = rot*PI/4;



    var x = cos((i+offset));
    var y = sin((i+offset));
    var a = a1 *sin(i/2);
    var b = b1 *sin(i/2);
    line(a*x,a*y,b*x,b*y);


    i+=0.01;

    if(rot==9&&i>=TWO_PI-0.02)
    {
      rot=0;
      currcol=random(300);
      a1 = random(10,min(width,height));
      b1 = a1* random(0.5,0.99);   
    }

    if(i>=TWO_PI-0.01)
    {
      i=0;
      rot++;
    }
    
  }
}