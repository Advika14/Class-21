var fixedRect , movingRect;
var gameObject1,gameObject2,gameObbject3,gameObbject4;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor="green";
 fixedRect.debug= true;
movingRect = createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";
gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";
gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";


movingRect.velocityY = -5;
fixedRect.velocityY = 5;

}

function draw() {
  background(0);  
  bounceOff(movingRect,fiedRect);
  drawSprites();
}

function bounceOff(gameObject1,gameObject2)
{
  if (gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2 && 
    gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2)
     {
       gameObject1.velocityX = gameObject1.velocityX *(-1);
       gameObject2.velocityX = gameObject2.velocityX *(-1);
     }
    if (gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2 &&
   gameObject2.y -gameObject1.y < gameObject2.height/2 + gameObject1.height/2)
    {
     gameObject1.velocityY = gameObject1.velocityY *(-1);
     gameObject2.velocityY= gameObject2.velocityY *(-1);
   }
}


