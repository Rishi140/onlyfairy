var starImg,bgImg;
var star, starBody;
var fairy,fairyImage;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairy=createSprite(130,520);
fairy.addAnimation("fairyFlying",fairyImage);
fairy.scale = 0.2;
	//create fairy sprite and add animation for fairy



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
Engine.update(engine);
fairy.velocityX=0;
fairy.velocityY=0;

  edges=createEdgeSprites();
  fairy.bounceOff(edges);


 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

if (star.y>470 && starBody.position.y>470){
Matter.Body.setStatic(starBody,true);	
}
if (keyDown("UP_ARROW")) {
	fairy.velocityX=0
	fairy.velocityY=-4
	}
	  
  if (keyDown("DOWN_ARROW")) {
	fairy.velocityX=0
	fairy.velocityY=4
	}
	  
  if (keyDown("RIGHT_ARROW")) {
	fairy.velocityX=4
	fairy.velocityY=0
	}
	  
  if (keyDown("LEFT_ARROW")) {
	fairy.velocityX=-4
	fairy.velocityY=0
	}

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyDown("UP_ARROW")) {
		fairy.velocityX=0
		fairy.velocityY=-4
		}
		  
	  if (keyDown("DOWN_ARROW")) {
		fairy.velocityX=0
		fairy.velocityY=4
		}
		  
	  if (keyDown("RIGHT_ARROW")) {
		fairy.velocityX=4
		fairy.velocityY=0
		}
		  
	  if (keyDown("LEFT_ARROW")) {
		fairy.velocityX=-4
		fairy.velocityY=0
		}
	//writw code to move fairy left and right
	
}
