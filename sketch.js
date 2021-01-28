
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world;



var Roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var Rope1, Rope2, Rope3, Rope4, Rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });
  
	bobDiameter = 40;

	Roof = new roof(400,100,600,40);

	bobObject1 = new bob(200,500,100);
	bobObject2 = new bob(300,500,100);
	bobObject3 = new bob(400,500,100);
	bobObject4 = new bob(500,500,100);
	bobObject5 = new bob(600,500,100);

	Rope1 = new rope(bobObject1.body, Roof.body, -bobDiameter*5, 0);
	Rope2 = new rope(bobObject2.body, Roof.body, -bobDiameter*2.5, 0);
	Rope3 = new rope(bobObject3.body, Roof.body, -bobDiameter*0.08, 0);
	Rope4 = new rope(bobObject4.body, Roof.body, bobDiameter*2.5, 0);
	Rope5 = new rope(bobObject5.body, Roof.body, bobDiameter*5, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(153, 255, 204);
  
  drawSprites();

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();

  Roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  RoofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  RoofBodyX=RoofBodyPosition.x+RoofBodyOffset.x
  RoofBodyY=RoofBodyPosition.y+RoofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, RoofBodyX,RoofBodyY);
}

