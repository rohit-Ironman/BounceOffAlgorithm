var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(800, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(800, 800,80,30);
  gameObject2.shapeColor = "green";

  gameObject1.velocityY = +5;
  gameObject2.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(gameObject1, gameObject2);
  drawSprites();
}

