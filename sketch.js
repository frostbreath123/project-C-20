var fixedRect, movingRect;
var rect4,rect1,rect2,rect3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(100,200,50,50)
  rect1.shapeColor="orange"

  rect2=createSprite(200,200,50,50)
  rect2.shapeColor="orange"

  rect3=createSprite(300,200,50,50)
  rect3.shapeColor="orange"

  rect4=createSprite(400,200,50,50)
  rect4.shapeColor="orange"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touchingThis(rect1,movingRect)){
    movingRect.shapeColor = "red";
  rect1.shapeColor = "red";

  }else{
    movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
  }

 
  drawSprites();
}


