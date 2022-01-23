let speed =4;

let smoothfactor = 0.008;

let npart =1500;

let randval;


let ps = [];

class particle
{
  constructor(x,y)
  {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.prevpos = createVector(x,y);
  }
  
  
  
  update()
  {
    
    if(this.pos.x>width || this.pos.x<0 || this.pos.y>height || this.pos.y<0)
    {
      this.pos.x = random(width);
      this.pos.y = random(height);
      
    }
    this.prevpos.x=this.pos.x;
    this.prevpos.y=this.pos.y;
    this.vel= p5.Vector.fromAngle(noise(this.pos.x*smoothfactor,this.pos.y*smoothfactor)*2*PI);
    this.vel.setMag(speed);
    this.pos.add(this.vel);
    
  }
  display()
  {
    stroke(noise(this.pos.x*smoothfactor,this.pos.y*smoothfactor)*255,255,75);
    strokeWeight(0.8);
    line(this.prevpos.x,this.prevpos.y,this.pos.x,this.pos.y);
    //noStroke();
    //circle(this.pos.x,this.pos.y,0.75);
  }
}

function mouseClicked()
{
  keyPressed();
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);
  noiseSeed(random(1000));

  smooth();
    
  
  for(let i=0;i<npart;i++)
  {
    ps[i] = (new particle(random(width),random(height)));
  }
  //for(particle x: ps)
  //{
  //  x = new particle(random(width),random(height));
  //}
  randval = random(100); 
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(0);
  setup();
}

function keyPressed()
{
  background(0); 
  //setup();
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);
  noiseSeed(random(1000));
  smoothfactor = random(0.001,0.02);

  
  for(let i=0;i<npart;i++)
  {
    ps[i] = (new particle(random(width),random(height)));
  }
  //for(particle x: ps)
  //{
  //  x = new particle(random(width),random(height));
  //}
  randval = random(10);
}
function draw()
{
  //background(0,0,0,1);
  //p.update();
  //p.display();
  

  for(let i=0;i<npart;i++)
  {
    //x = new particle(random(width),random(height));
    ps[i].update();
    ps[i].display();
  }
  
  
}

