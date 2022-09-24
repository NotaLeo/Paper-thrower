//rename the modules 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

/* createengine- create world - create body/object - add object into the world */

var engine,world;
var ball;
var ground;
var g1,g2;

function setup() {
	createCanvas(windowWidth,windowHeight);
  //create engine
    engine=Engine.create();
  //create world
  world=engine.world;
 
  //create object (ball)
  var ball_options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0,
    density : 1.2
    }
 
  ball=Bodies.circle(200,100,20,ball_options);
  //add object into the world 
  World.add(world,ball);
  //object for ground
  ground=new Ground(windowWidth/2,600,windowWidth,20)
  g1=new Ground (1100,530,20,120);
  g2 = new Ground (1300,530,20,120);
 rectMode(CENTER)

  
}


function draw() {
 
  background(0);
  Engine.update(engine)
  //to display objects
  ellipse(ball.position.x,ball.position.y,20,20)
  //to display
  ground.display()
  g1.display ()
    g2.display ()
  
}

function keyPressed () {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position, {x:80,y:-85})
  }
}

