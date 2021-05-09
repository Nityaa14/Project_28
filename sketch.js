const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//launcherObject and LauncherForce
var launcherObject;
var launcherForce =100;
var boy;
var tree;


function preload()
{
   //load boy and tree image
   boyImage = loadImage("Plucking mangoes/boy.png");
   treeImage = loadImage("Plucking mangoes/tree.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//create stone
    stoneObj = new Stone(100, 400);
    launcherObj = new Launcher(stoneObj.body, {x:100, y: 400});
    ground = new Ground(400, 650, 800, 20);
    mango1 = new Mango(600, 300, 30, 30);
    mango2 = new Mango(600, 400, 30, 30);    
    mango3 = new Mango(650, 350, 30, 30);
    mango4 = new Mango(700, 300, 30, 30);
    mango5 = new Mango(700, 350, 30, 30);

	Engine.run(engine);
  
}

//add in setup or draw
function draw() {
  rectMode(CENTER);
  background(255);
  
        image(boyImage, 10, 300, 600, 400);
        image(treeImage, 500, 200, 400, 400);

  stoneObj.display();
  launcherObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();

  detectCollision(stoneObj.body, mango1);
  detectCollision(stoneObj.body, mango2);
  detectCollision(stoneObj.body, mango3);
  detectCollision(stoneObj.body, mango4);
  detectCollision(stoneObj.body, mango5);
  drawSprites();
 
}
function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  launcherObj.Fly();
}

function keyPressed() {
    if (keyCode === 32){
      Matter.Body.setPosition(stoneObj.body, {x: 100, y: 100});
      launcherObj.Attach(stoneObj.body);
    }
}
  function detectCollision(obj1,obj2){
    obj1x = obj1.position.x
    obj1y = obj1.position.y
    obj2x = obj2.body.position.x    
    obj2y = obj2.body.position.y  

    if(obj1x >= obj2x-50 && obj1y <= obj2y+50 && obj1x <= obj2x+50 && obj1y >= obj2y-50){
        console.log('hola')
        Matter.Body.setStatic(obj2.body,false)
    }

    

}





