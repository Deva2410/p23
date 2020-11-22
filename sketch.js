var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, package_options;
var bottomwall,rightwall,leftwall;
var bottomwallbody,rightwallboady,leftwallboady;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	bottomwall = createSprite(350,650,200,20);
	bottomwall.shapeColor = "red"

	rightwall = createSprite(460,610,20,100);
	rightwall.shapeColor = "red"

	leftwall = createSprite(260,610,20,100);
	leftwall.shapeColor = "red"

    var package_options=
  {
    
    restitution: 1.0,
    isStatic: false
  }

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
    
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	bottomwallbody = Bodies.rectangle(350, 650,width, 20 , {isStatic:true} );
	World.add(world, bottomwallbody);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  bottomwall.x=bottomwallbody.position.x
  bottomwall.y=bottomwallbody.position.y

  
  console.log(packageBody.position.y);
  if (keyCode === DOWN_ARROW) 
   {
	
	keyPressed();
    
   }
  drawSprites();
 
}

function keyPressed() 
{
  
	Matter.Body.setStatic(packageBody,false)
	Matter.Body.setStatic(bottomwallbody,true)

    
   
}



