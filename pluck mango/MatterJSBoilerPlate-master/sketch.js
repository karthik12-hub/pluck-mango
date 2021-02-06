
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground1,tree1,tree2,m1,m2,m3,m4,m5,stone1,chain1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,690,800,25)
tree1=new Tree(600,400,10,30)
//tree2=new Tree(600,200,300,300)
m1=new Mango(600,200,50,50)
m2=new Mango(600,100,50,50)
m3=new Mango(600,300,50,50)
m4=new Mango(700,200,50,50)
m5=new Mango(500,200,50,50)
stone1=new Stone(100,400,50,50)
chain1=new Chain(stone1.body,{x:150,y:350})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground1.display();
  tree1.display();
  //tree2.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  stone1.display();
  chain1.display();
  detectCollition(m1,stone1)
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain1.fly()
}
//mouseReleased
function detectCollition(lstone,lmango){
 mangoBodyPosition =lmango.body.position
 stoneBodyPosition =lstone.body.position

 var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}