
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint
var roof;
var bob1;
var rope1;
var bobDiameter =30;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(275,10,175,10)
	bob1 = new Paper(200,300,15);
	bob2 = new Paper(230,300,15);
	bob3 = new Paper(260,300,15);
	bob4 = new Paper(290,300,15);
	bob5 = new Paper(320,300,15);
	bob6 = new Paper(350,300,15);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0)
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.5,0)
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*0,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter,0)
	rope6 = new Rope(bob6.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);

	keychecker = 1;
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(220);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
 

  drawSprites();
  
}


function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -10, y:-45});
	}
}
