var a;
var b;
var button;

function setup(){
  //decide the game area
  createCanvas(600,600);
  a=prompt("Enter a value for A:");
  b=prompt("Enter a value for B:");
  button=createButton("Click her to swap");
  button.mousePressed(swap);

}

function draw(){
  background("black");

}

function swap(){
  [a,b]=[b,a]

  console.log("The new value of A is",+a);
  console.log("The new value of B is",+b);


}
