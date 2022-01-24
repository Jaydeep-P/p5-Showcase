var arr = []
var blockWidth = 20;
var wid,hei;
var qu = []
var vis = []
var currCol = [100,255,255]

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,255);
  wid = int(height/blockWidth);
  hei = int(width/blockWidth);
  for(var i=0;i<hei;i++){
    let tempArr = []
    let tempvis = []
    for(var j=0;j<wid;j++){
      tempArr.push([0,0,255])
      tempvis.push(0)
    }
    arr.push(tempArr);
    vis.push(tempvis);
  }
  
  // frameRate(1)
}

function dispArr(){
  for(var i=0;i<hei;i++){
    for(var j=0;j<wid;j++){
      fill(arr[i][j]);
      noStroke()
      arr[i][j][1]-=5;//fade col
      if(vis[i][j]!=0){
        vis[i][j]++;
        vis[i][j]%=10;//fade vis
      }
      square(i*blockWidth,j*blockWidth,blockWidth);
    }
  }
}

function mouseClicked() {
  let x = int(mouseX/blockWidth);
  let y = int(mouseY/blockWidth);
  if(vis[x][y]==0){
    currCol[0]+=100;
    currCol[0]%=255;
    arr[x][y]=currCol.slice(0);
    qu.length = 0;
    qu.push([x,y]);
  }
}

function isInside(x,y){
  return x<hei&&y<wid&&x>=0&&y>=0&&vis[x][y]==0;
}

function oneBfsPass(){
  let len = qu.length;
  for(var i = 0;i<min(1000,len);i++){
    let curr = qu.shift();
    let x = curr[0],y=curr[1];
    // if(arr[x][y] == [255,0,0]){
    //   return true;
    // }
    
    arr[x][y] = currCol.slice(0)
    vis[x][y] = 1;
    
    if(isInside(x+1,y)){
      qu.push([x+1,y])
      vis[x+1][y] = 1;
    }
    if(isInside(x,y+1)){
      qu.push([x,y+1])
      vis[x][y+1] = 1;
    }
    if(isInside(x-1,y)){
      qu.push([x-1,y])
      vis[x-1][y] = 1;
    }
    if(isInside(x,y-1)){
      qu.push([x,y-1])
      vis[x][y-1] = 1;
    }
  }
}

function draw() {
  // background(220);
  oneBfsPass()
  dispArr()
  // noLoop()
}