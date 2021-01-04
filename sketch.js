const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 var option={
   isStatic:true
 }
  ground=Bodies.rectangle(200,390,400,20,option)
  World.add(world,ground);
  console.log(ground)
  var ball_options={
    restitution: 1
  }
  ball=Bodies.circle(200,100,50,ball_options)
  World.add(world,ball);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  circle(ball.position.x,ball.position.y,20)
  drawSprites();
}