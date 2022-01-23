
var size;
var rotatefactor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  size = floor(min(height,width)/3);
  rotatefactor = 0;
}

function windowResized() {
  // h = windowHeight-20-20-23;
  // resizeCanvas(windowWidth, h);
  setup();
  background(100,0,0);
}

function mouseClicked()
{
  setup();
}

function draw() {
  background(100,0,0);
  translate(width/2,height/2)
  var colval;
  
  for(var i=0;i<255;i+=4)
  {
    var bval = map(i,0,255,0,120);
    colval = ((256-i)+ rotatefactor*100);
    // console.log(bval);
    
    rotate(rotatefactor);
    fill(colval,100,bval+10);
    stroke(colval,100,bval);
    strokeWeight(2);
    if(size-i <=0){break;}
    rect(-(size-i),-(size-i),2*(size-i),2*(size-i));
  }
  rotatefactor+=0.001;
  //size+=1;
}