let Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];
let ground;
let wall;

const right = 39;
const left = 37;
const up = 38;
const down = 40;

var vel = 0;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == right) {
    rightPressed = true;
}
    if(e.keyCode == left) {
    leftPressed = true;
}
 if(e.keyCode == up) {
    upPressed = true;
}
  else if(e.keyCode == down) {
    downPressed = true;
}

}

function keyUpHandler(e) {
    if(e.keyCode == right) {
    rightPressed = false;
}
    if(e.keyCode == left) {
    leftPressed = false;
}
    if(e.keyCode == up) {
    upPressed = false;
}
    else if(e.keyCode == down) {
    downPressed = false;
}
}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;


function setup() {
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
        let options = {
            isStatic: true
        }
        ground = Bodies.rectangle(300, height, width, 50, options);
        wall = Bodies.rectangle()
        World.add(world, ground)
}

/*function mousePressed(){
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}*/

function mouseDragged(){
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw(){
    background(51);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    noStroke();
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x ,ground.position.y, width, 50);

}

