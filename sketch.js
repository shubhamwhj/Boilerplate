
var player;
var platform;
var player_image, platform_image;

function preload(){
  player_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
}

function setup() {
  createCanvas(500, 500);
  player = createSprite(250,300,20,50);
  player.addImage("player",player_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15

}

function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

  drawSprites();
}







