var curr,next,prev;
var block,wide,high;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  block = 10;
  high = floor(width/block);
  wide = floor(height/block);
  
  prev = []
  curr = []
  for(var i = 0;i<high;i++){
    var tempa = [],tempb=[]
    for(var j =0;j<wide;j++){
      tempa.push(0)
      tempb.push(0)
    }
    prev.push(tempa)
    curr.push(tempb)
  }
  setRandom();
  frameRate(20)
}

function show(){
  for(var i = 0;i<high;i++){
    for(var j =0;j<wide;j++){
      if(curr[i][j]==1){
        noStroke();
        fill(255);
        rect(i*block,j*block,block,block,block*0.3);
        // circle(i*block + block/2,j*block+ block/2,block);
      }
    }
  }
}

function setRandom(){
  for(var i = 1;i<high-1;i++){
    for(var j =1;j<wide-1;j++){
      curr[i][j] = floor(random(2));
    }
  }
}

function isThere(i,j){
  if(i<0||j<0||i>=high||j>=wide) return 0;
  // i+=high;
  // i%=high;
  // j+=wide;
  // j%=wide;
  return prev[i][j];
}

function countNeighbours(i,j){
  var tot = 0;
  tot+= isThere(i-1,j-1);
  tot+= isThere(i-1,j);
  tot+= isThere(i-1,j+1);
  tot+= isThere(i,j-1);
  // tot+= isThere(i,j);
  tot+= isThere(i,j+1);
  tot+= isThere(i+1,j-1);
  tot+= isThere(i+1,j);
  tot+= isThere(i+1,j+1);
  
  // if(tot>0) console.log(tot)
  return tot;
}

function copyToPrev(){
  for(var i = 0;i<high;i++)
    for(var j =0;j<wide;j++)
      prev[i][j] = curr[i][j];
}

function mouseClicked() {
  let x = int(mouseX/block);
  let y = int(mouseY/block);
  curr[x][y] = 1;
}

function update(){
  copyToPrev();
  for(var i = 0;i<high;i++){
    for(var j =0;j<wide;j++){
      curr[i][j] = 0;
      var neigh = countNeighbours(i,j);
      if(prev[i][j]==1){
        if(neigh==2||neigh==3){
          curr[i][j] = 1;
        }
        else{
          curr[i][j] = 0;
        }
      }
      else{
        if(neigh==3){
          curr[i][j] = 1;
        }
        else{
          curr[i][j] = 0;
        }
      }
    }
  }
}

function draw() {
  background(0);
  show();
  update();
  // noLoop();
}