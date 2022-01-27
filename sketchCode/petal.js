var n = 130,
  arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < n; i++) {
    arr.push(map(i, 0, n - 1, 1, 0));
  }
}

function petal(len) {
  stroke(0);
  strokeWeight(0.1);
  var x = len * 0.33;
  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, -x, len / 2, 0, len);
  bezierVertex(0, len, x, len / 2, 0, 0);
  endShape(CLOSE);
}

var rotFac = 3.88322207745; // TWO_PI/goldenRatio
var time = 0.01,start = 0;

function draw() {
  translate(width / 2, height / 2);
  background(0);
  var len = min(width,height)*1.2 / 2;
  rotate(start * rotFac);
  for (var i = 0; i < n; i++) {
    fill(0, map(i, 0, n, 0, 160), 0);
    rotate(rotFac);
    petal(len * arr[i]);
    arr[i] += 0.0007;
  }

  if (arr[0] >= 1) {
    arr.shift();
    arr.push(0);
    start++;
  }
}
