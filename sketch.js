var a = prompt("Enter the first number: ")
var b = prompt("Enter the second number: ")

function setup() {
  createCanvas(400, 400);
  var button = createButton("Click to swap")
  button.mousePressed(swap)
}

function draw() {
  background(220);
  rect(200,200,50,50);
}

function swap(){
  [a,b] = [b,a]
  console.log("the value of a is", + a)
  console.log("the value of b is", + b)
}