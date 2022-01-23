let R,r,d,ang=0;

let px=989,py=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB,300);
  
  //Rslider = createSlider(0, 255, 50);
  //rslider = createSlider(0, 255, 30);
  //dslider = createSlider(0, 255, 50);
  frameRate(60);
  R=190;
  r=295;
  d=100;
}

function windowResized() { 
 setup();
 keyPressed();
}

function keyPressed()
{
  background(0);
  ang=0;
  px=989;
  R= min(width,height)/2 - (min(width,height)/2)%10;//random(100,200);
  r=R*random(0.3,0.7);
  r = r - r%10 + 5;
  if(2*r==R){r+=5;}
  d=r*random(0.3,0.8);
  
}

function mouseClicked()
{
  keyPressed();
}

function draw() {
  translate(width/2,height/2);
  
  
  for (let i = 0; i < 30; i++) {
    var x = (R-r)*cos(ang) + d*cos((R-r)*ang/r);
    var y = (R-r)*sin(ang) - d*sin((R-r)*ang/r);
    
    if(px!=989){
      stroke((ang/5)%300,300,300);
    line(px,py,x,y);}

    // stroke(100);
    // noFill();
    // //ellipse(0,0,(R+d-r+3)*2,(R+d-r+3)*2);


    // var x1 = (R-r)*cos(ang);
    // var y1 = (R-r)*sin(ang);

    
    px = x;
    py = y;
    
    ang+=0.1;
    
  }
  
}