
var blocksize = 20;
var fruit;
var cols;
var rows;
var head,tail;
var dir;
var cells = [];
maxlen = 50;

var h;

function setup() 
{
  h = windowHeight;
  createCanvas(windowWidth, h);
  frameRate(60);
  background(0);
  cols = floor(windowWidth/blocksize);
  rows = floor(h/blocksize);
  head=createVector(floor(cols/2),floor(rows/2));
  tail = head;
  fruit = createVector(floor(random(1,cols-1)),floor(random(1,rows-1)));
  cells.push(head);
  dir = createVector(0,-1);
  frameRate(10);
}

function windowResized() {
  h = windowHeight-65;
  cols = floor(windowWidth/blocksize);
  rows = floor(h/blocksize);
  // head=createVector(floor(cols/2),floor(rows/2));
  // tail = head;
  fruit = createVector(floor(random(1,cols-1)),floor(random(1,rows-1)));
  // cells.push(head);
  // dir = createVector(0,-1);
  resizeCanvas(windowWidth, h);
  background(0);
}

function drblock(x,y,color)
{
  fill(color);
  noStroke();
  rect(x *blocksize,y *blocksize,blocksize,blocksize);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && dir.x!=1) {
    dir = createVector(-1,0);
  } else if (keyCode === RIGHT_ARROW && dir.x!=-1) {
    dir = createVector(1,0);
  } else if (keyCode === DOWN_ARROW && dir.y!=-1) {
    dir = createVector(0,1);
  } else if (keyCode === UP_ARROW && dir.y!=1) {
    dir = createVector(0,-1);
  }
}

function draw() 
{
  background(0);
  drblock(fruit.x,fruit.y,"red");

  head = createVector(head.x+dir.x,head.y+dir.y);
  cells.push(head);
  //console.log(cells.length);

  cells.forEach(element => {
    if(head.x==element.x && head.y == element.y && cells[cells.length-1]!=element)
    {
      while(cells.length != 2)
      {
        cells.shift();
      }
      
    }
  });
  
  cells.forEach(element => {
    drblock(element.x,element.y,"white");
    
    //console.log('1');
  });

  

  
  // drblock(head.x,head.y,"white");

  if(head.x==fruit.x && head.y == fruit.y)
  {
    fruit = createVector(floor(random(1,cols-1)),floor(random(1,rows-1)));
    drblock(fruit.x,fruit.y,"red");

  }
  else
  {
    cells.shift();
    
  }

  if(head.x>cols)
  {
    head.x =0;
  }
  if(head.y>rows)
  {
    head.y=0;
  }
  if(head.x<0)
  {
    head.x=cols;
  }
  if(head.y<0)
  {
    head.y=rows;
  }

  
  

  // noLoop();
}
