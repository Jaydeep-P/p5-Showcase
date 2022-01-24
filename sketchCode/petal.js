function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mouseClicked(){
  background(0);
  draw()
}

function petal(len){
  // rect(0,0,len,10);
  stroke(0)
  strokeWeight(0.1);
  // noStroke()
  var x = len*0.33;
  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0,-x, len/2,0,len);
  bezierVertex(0,len,x, len/2,0, 0);
  endShape(CLOSE);
}

var E = 2.7182,time=0.01,increasing= true;

function mouseClicked(){
  console.log(time);
}

function draw() {
  translate(width/2,height/2);
  background(0);
  var len = width/2;
  for(var i = 0;i<200;i++){
    fill(0,i,0);
    rotate(3.88322207919)
    petal(len);
    len*= Math.pow(E,-time);
  }
  
  if(time>0.0667){
    increasing = false;
  }
  if(time<0.015){
    increasing = true;
  }
  
  if(increasing)
    time+= 0.0001;
  else
    time-= 0.0001;
}