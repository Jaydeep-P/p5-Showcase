function valueAtAngle(ang){
  return noise(sin(3*ang),time*0.1);
}


function setup() {
  createCanvas(windowWidth,windowHeight);
}

var time = 0;

function draw() {
  background(0);
  translate(width/2,height/2);
  var len = min(width,height)*0.5;

  var arr = [],arr1 = [];
  var i = 0;
  for(var ang = 0;ang<=TWO_PI;ang+=0.02,i++){  
    arr.push(sin(ang)*valueAtAngle(ang));
    arr1.push(cos(ang)*valueAtAngle(ang));
  }

  noStroke();
  
  fill(255);
  beginShape();
  i=0;
  for(ang = 0;ang<=TWO_PI;ang+=0.02,i++){      
    vertex(len*arr[i],len*arr1[i]);
  }
  endShape(CLOSE); 
  
  rotate(PI/2)

  fill(200);
  beginShape();
  len*=0.5;
  i=0;
  for(ang = 0;ang<=TWO_PI;ang+=0.02,i++){      
    vertex(len*arr[i],len*arr1[i]);
  }
  endShape(CLOSE); 
  
  rotate(PI/2)
  
  fill(100);
  beginShape();
  
  len*=0.5;
  i=0;
  for(ang = 0;ang<=TWO_PI;ang+=0.02,i++){      
    vertex(len*arr[i],len*arr1[i]);
  }
  endShape(CLOSE); 
  
  rotate(PI/2)
  
  fill(50);
  beginShape();
  
  len*=0.5;
  i=0;
  for(ang = 0;ang<=TWO_PI;ang+=0.02,i++){      
    vertex(len*arr[i],len*arr1[i]);
  }
  endShape(CLOSE); 
  
  rotate(PI/2)
  
  fill(25);
  beginShape();
  
  len*=0.5;
  i=0;
  for(ang = 0;ang<=TWO_PI;ang+=0.02,i++){      
    vertex(len*arr[i],len*arr1[i]);
  }
  endShape(CLOSE); 
  
  time+= 0.04;
}