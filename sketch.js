var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;
var car ;
var car_running ;
var score;
var obstaclesGroup, obstacle1, obstacle2, obstacle3
var r , g ;

function preload() {
  
car_running = loadAnimation ("PCar.jpg") ;
obstacle1 = loadImage ("Car-1.jpg") ;
obstacle2 = loadImage ("Car-2.jpg") ;
obstacle3 = loadImage ("Car-3.jpg") ;
r = loadImage ("restart.png");
g = loadImage ("gameOver.png");


}

function setup() {
  
  createCanvas(300, 500);
  
  car = createSprite(150,450,20,50);
  car.addAnimation("running",car_running);
  car.scale=0.05;

   ground = createSprite(200,180,2,550);
  ground.velocityY = 4;

   ground1 = createSprite(100,100,2,550);
  ground1.velocityY = 4;

  obstaclesGroup = createGroup();

  ra = createSprite(150,250);
  ra.addImage (r);
  ga = createSprite(150,250);
  ga.addImage (g);

  score = 0;
  
}

function draw() {
  
  
  background(220);

  text("Score: "+ score, 220,20);

  if(gameState === PLAY){

    ga.visible = false;
    ra.visible = false;

    score = score + Math.round(getFrameRate()/60);
  
  if(ground.y>180){
    ground.y = ground.height/2 ;
  }
  
  if(ground1.y>100){
    ground1.y = ground1.height/2
  }
  
  spawnObstacles();
  spawnObstacles1();
  spawnObstacles2();

  if(obstaclesGroup.isTouching(car)){
    gameState = END;
    

  }

  }

  else if (gameState === END) {

    ga.visible = true;
    ra.visible = true;
   
    ground.velocityX = 0;
    obstacle.velocityY = 0;
    
    
  }

  drawSprites();
  
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(50,0,20,50);
    obstacle.velocityY = +10;
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.06;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }

  
 function spawnObstacles1(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(150,0,20,50);
    obstacle.velocityY = +5;
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.06;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }

 function spawnObstacles2(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(250,0,20,50);
    obstacle.velocityY = +8;
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.06;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }

function keyPressed(){
  
  if(keyCode===LEFT_ARROW){
    
    
    car.x = car.x-100 ;
  }
  
  if(keyCode===RIGHT_ARROW){
    
    car.x = car.x+100 ;
    
  }
  
}
