var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  
  if (keyDown("DOWN_ARROW")){
    background("green")
    box.velocityX = 0; 
    box.velocityY = 3;
    
  }
  if (keyDown("UP_ARROW")){
    background("blue")
    box.velocityX = 0;
    box.velocityY = -3;
    
  }
  if (keyDown("LEFT_ARROW")){
    background("pink")
    box.velocityX = -3;
    box.velocityY = 0;
   
  }
  if (keyDown("RIGHT_ARROW")){
    background("yellow")
    box.velocityX = 3;
    box.velocityY = 0;

  }
    drawSprites();
}





