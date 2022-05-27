
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var parede1, parede2
var engine, world
var block1, plane
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var plane_options = {
		isStatic: true,
	  };
	  plane = Bodies.rectangle(400,680, 800, 40, plane_options);
	  World.add(world, plane);
	  parede1 = Bodies.rectangle(600,610, 40, 100, plane_options);
	  World.add(world, plane);
	  parede2 = Bodies.rectangle(780,610, 40, 100, plane_options);
	  World.add(world, plane);
	  
	  var block1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0,
		density: 0.5
	  };
	  block1 = Bodies.circle(220, 10, 50, block1_options);
	  World.add(world, block1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();
  rect(plane.position.x, plane.position.y, 800, 40);
  ellipse(block1.position.x, block1.position.y, 50);
  rect(parede1.position.x,parede1.position.y,40, 100)
  rect(parede2.position.x,parede2.position.y,40, 100)
}
	function keyPressed(){
		if   (keyCode===UP_ARROW){
			Body.applyForce(block1, block1.position, {x:10, y:-100})
		}
	}