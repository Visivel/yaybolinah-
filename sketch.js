const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2;
var rotator1, rotator2, rotator3;
var engine, world;
var angle1 = 60, angle2 = 60, angle3 = 60;
var ball, ball2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var plane_options={
		isStatic: true
	}
	var particle_options={
		restitution: 0.8
	}
	block1 = Bodies.rectangle(250,400,150,20,plane_options);
	World.add(world,block1);
	block2 = Bodies.rectangle(500,400,150,20,plane_options);
	World.add(world,block2);
	ball = Bodies.circle(350,50,10,particle_options);
	World.add(world,ball);
	ball2 = Bodies.circle(350,70,10,particle_options);
	World.add(world,ball2);
	rotator1 = Bodies.rectangle(350,200,150,20,plane_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(350,200,150,20,plane_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(350,200,150,20,plane_options);
	World.add(world,rotator3);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y);
  ellipse(ball2.position.x,ball2.position.y);
  fill("green")
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  Body.rotate(rotator1,angle1);
  
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20)
  pop();
  angle1 += 2;

  Body.rotate(rotator2,angle2);

  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20)
  pop();
  angle2 +=4;
 
  Body.rotate(rotator3,angle3);

  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20)
  pop();
  angle3 +=6;
  drawSprites();
}



