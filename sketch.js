
var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyDown("DOWN_ARROW")){
    box.velocityX = 0;
    box.velocityY = 3;
  
  }
  if (keyDown("UP_ARROW")){
    box.velocityX = 0;
    box.velocityY = -3;
  
  }
  if (keyDown("LEFT_ARROW")){
    box.velocityX = -3;
    box.velocityY = 0;
  
  }
  if (keyDown("RIGHT_ARROW")){
    box.velocityX = 3;
    box.velocityY = 0;
  
  }
    drawSprites();
}




