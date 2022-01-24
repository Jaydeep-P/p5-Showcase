var radTrail=1,pointL,pointH;

var numParts = 20;

var G = 10;

var pointArr = []

dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

class pointt{
  constructor(x=10,y=10,vx=0,vy=0){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = 0;
    this.ay = 0;
    this.m = random(pointL,pointH);
    this.col = random(360)
    this.trail = [[x,y]]
  }
  
  show(){
    noStroke()
    for(var i = 0;i<this.trail.length;i++){
      fill(0,0,i)
      circle(this.trail[i][0],this.trail[i][1],radTrail);
    }
    fill(this.col,100,100);
    circle(this.x,this.y,this.m);
  }
  
  update(){
    this.trail.push([this.x,this.y]);
    if(this.trail.length>100) this.trail.shift()
    this.x+= this.vx;
    this.y+= this.vy;
    this.vx+= this.ax;
    this.vy+= this.ay;
    this.vx*= 0.99;
    this.vy*= 0.99;
    var acc = [0,0]
    for(var i =0;i<pointArr.length;i++){
      var dista = distance(this,pointArr[i])
      if(dista < 5){
        continue;
      }
      else{
        // calc acc
        acc[0] += G*(pointArr[i].m/(dista*dista*dista))* (pointArr[i].x-this.x) ;
        acc[1] += G*(pointArr[i].m/(dista*dista*dista))* (pointArr[i].y-this.y) ;
      }
    }
    this.ax = acc[0];
    this.ay = acc[1];
    
    if(this.x>width||this.x<0){
      this.x += width;
      this.x %= width;
    }
    if(this.y>height||this.y<0){
      this.y += height;
      this.y %= height;
    }
  }
  
}

function distance(p1,p2){
  return sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointL = 0.01*height
  pointH = 0.03*height
  for(var i = 0;i<10;i++){
    pointArr.push(new pointt(random(width),random(height)))
  }
  colorMode(HSB)
}

function mouseClicked(){
  pointArr.push(new pointt(mouseX, mouseY))
  if(pointArr.length>numParts){
    pointArr.shift();
  }
}

function draw() {
  background(0);
  for(var i =0;i<pointArr.length;i++){
    pointArr[i].update();
    pointArr[i].show();
  }
}