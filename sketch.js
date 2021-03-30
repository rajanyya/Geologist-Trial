
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammerobj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
  hammerobj = new hammer(pos.x,pos.y,width,height)
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammerobj.display();
  drawSprites();
 
}



