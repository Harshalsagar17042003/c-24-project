const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var hammer,rubber,stone,sand1,sand2,sand3,sand4,sand5,ground;

 
function setup() {
  createCanvas(1200,400);

engine=Engine.create();
world=engine.world;

hammer =new Hammer(100,100)
rubber = new Rubber(650,220,40);
stone =new Stone(650,250);
wood =new Wood(650,350);

sand1=new Sand(650,120);
sand2=new Sand(650,120);
sand3=new Sand(650,120);
sand4=new Sand(650,120);
sand5=new Sand(650,120);
sand6=new Sand(650,120);
sand7=new Sand(650,120);
sand8=new Sand(650,120);
sand9=new Sand(650,120);
sand10=new Sand(650,120);
sand11=new Sand(650,120);
sand12=new Sand(650,120);
sand13=new Sand(650,120);
sand14=new Sand(650,120);
sand15=new Sand(650,120);

ground=new Ground(600,400,1200,50);
}


function draw() {
  background(0); 

  Engine.update(engine);

  hammer.display();
  rubber.display();
  stone.display();
  wood.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  
  ground.display();
}