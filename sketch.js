a=0.0028
e=0.004

a1=0.0045
e1=0.009

a2=0.0071
e2=0.0001

a3=0.0125
e3=0.007


let scalef;

//let theta = 37764*time + 0.9811

let theta=0;

let theta1= 0;

let theta2= 0;

let theta3= 0;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  
  scalef = createSlider(0, 22000, 100);
  scalef.position(20, 20);


  
}

function draw(){
  background(0);
  

  push();
  let c = color('orange');
  fill(c); // Use 'c' as fill color
  noStroke();
  circle(300,300,50)
  pop();
  
  push();
  fill('black')
  textSize(13); 
  textStyle(BOLD);
  text('Jupiter', 300-20, 300+5);
  pop();
  
   push();
  r=(a*(1-(e*e)))/(1+e*cos(theta))*scalef.value()
  x=r*cos(theta)
  y=r*sin(theta)
  translate(300,300);
  fill(225);
  let d = color('yellow');
  fill(d); // Use 'c' as fill color
  noStroke();
  circle(x,y,10);
  textSize(18);
  textStyle(BOLD);
  text('IO', x+5, y-5);
  theta=theta+1;
  pop();
  
  push();
  r1=(a1*(1-(e1*e1)))/(1+e1*cos(theta1))*scalef.value()
  x1=r1*cos(theta1)
  y1=r1*sin(theta1)
  translate(300,300);
  fill(225);
  let b = color('blue');
  fill(b); // Use 'c' as fill color
  noStroke();
  circle(x1,y1,10);
  theta1=theta1+0.498182999;
  textStyle(BOLD);
  textSize(18);
  text('Europa', x1+5, y1-5);
  pop();
  
  push();
  r2=(a2*(1-(e2*e2)))/(1+e2*cos(theta2))*scalef.value()
  x2=r2*cos(theta2)
  y2=r2*sin(theta2)
  translate(300,300);
  fill(225);
  let g = color('red');
  fill(g); // Use 'c' as fill color
  noStroke();
  circle(x2,y2,10);
  theta2=theta2+0.247274428;
  textStyle(BOLD);
  textSize(18);
  text('Ganemyde', x2+5, y2-5);
  pop();
 
  push();
  r3=(a3*(1-(e3*e3)))/(1+e3*cos(theta3))*scalef.value()
  x3=r3*cos(theta3)
  y3=r3*sin(theta3)
  translate(300,300);
  fill(225);
  let K = color('magenta');
  fill(K); // Use 'c' as fill color
  noStroke();
  circle(x3,y3,10);
  theta3=theta3+0.106006124;
  textStyle(BOLD);
  textSize(18);
  text('Callisto', x3+5, y3-5);
  pop();
}