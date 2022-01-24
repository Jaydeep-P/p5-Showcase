let blockWidth = 4;
let x,y;
let currArr;
let posx,posy;

var currDir=0;
var speed = 5;
var numCols = 4;

let up = 0;
let right = 1;
let down = 2;
let left = 3;

function turn(clock){
  if(clock==1){
    currDir++;
    currDir%=4;
  }
  else{
    currDir--;
    currDir+=4;
    currDir%=4;
  }
}

function drawSq(){
  let col;
  if(currArr[posx][posy]==0) col = [200,0,200];
  if(currArr[posx][posy]==1) col = [0,200,200];
  if(currArr[posx][posy]==2) col = [200,200,0];
  if(currArr[posx][posy]==3) col = [0,0,200];
  fill(col)
  noStroke()
  square(posx*blockWidth,posy*blockWidth,blockWidth)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/blockWidth;
  y = height/blockWidth;
  
  currArr = [];
  
  for(i =0;i<y;i++){
    let tempArr = []
    for(var j =0;j<x;j++){
      tempArr.push(0);
    }
    currArr.push(tempArr);
  }  
  posx = int(x/2)
  posy = int(y/2)
  background(50);
}

function everyLoop() {
  if(posx<0||posy<0||posx>=x||posy>=y){
    setup()
    return;
  }
  if(currArr[posx][posy] == 0){
    turn(0)
    currArr[posx][posy] += 1;
    currArr[posx][posy] %= numCols;
  }
  else if(currArr[posx][posy] == 1){
    turn(0)
    currArr[posx][posy] += 1;
    currArr[posx][posy] %= numCols;
  }
  else if(currArr[posx][posy] == 2){
    turn(1)
    currArr[posx][posy] += 1;
    currArr[posx][posy] %= numCols;
  }
  else if(currArr[posx][posy] == 3){
    turn(1)
    currArr[posx][posy] += 1;
    currArr[posx][posy] %= numCols;
  }
  
  drawSq();
  
  if(currDir==up){
    posy--;
  }
  if(currDir==down){
    posy++;
  }
  if(currDir==left){
    posx--;
  }
  if(currDir==right){
    posx++;
  }
}

function draw(){
  for(var i=0;i<speed;i++){
    everyLoop();
  }
  // noLoop()
}
