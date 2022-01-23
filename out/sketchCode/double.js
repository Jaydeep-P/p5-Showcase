let r1 = 125;
let r2 = 125;
let m1 = 10;
let m2 = 10;
let a1 = 0;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;
let g = 1;

let px2 = -1;
let py2 = -1;
let cx, cy;

let buffer;

// let lato;


function setup() 
{
  h = windowHeight;
  createCanvas(windowWidth, h);
  pixelDensity(1);
  a1 =  random(0.5,1.5)*PI;
  a2 =  a1+random(-1*0.2*PI,0.2*PI);
  cx = width / 2;
  cy = h/2;
  r1 = h/4 -10;
  r2 = h/4 -10;
  buffer = createGraphics(width, h);
  buffer.background(175);
  buffer.translate(cx, cy);
}

// function preload(){
//   lato = loadFont("https://fonts.googleapis.com/css?family=Lato");
// }

function windowResized() {
  h = windowHeight-65;
  resizeCanvas(windowWidth, h);
  reset();
  setup();
  background(0);
}

function reset(){
  a1 = 0;
  a2 = 0;
  a1_v = 0;
  a2_v = 0;
  px2 = -1;
  py2 = -1;  

}

function keyPressed() {
  if (keyCode === 32) {
    reset();
    setup();
  } 
}

function mouseClicked()
{
  keyPressed();
}

function draw() 
{
  background(175);
  imageMode(CORNER);
  image(buffer, 0, 0, width, h);

  fill(0);
  noStroke();
  textSize(20);
  // textFont(lato);
  //text('Press Spacebar to reset.', 10, h-29); 
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = (a1_v * a1_v * r1 * (m1 + m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;

  translate(cx, cy);
  stroke(0);
  strokeWeight(2);

  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;

  // a1_v *= 0.99;
  // a2_v *= 0.99;

  buffer.stroke(100);
  if (frameCount > 1 && px2!=-1) {
    buffer.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}
