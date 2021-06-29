var ground ,  background_img1 , city_img , fort_img , fgt_img ; 
var shooter;
var page;
var finalbackgorund_img , zombie_img ; 

function preload(){

  background_img1 = loadImage("images/background1.jpeg");
  finalbackground_img = loadImage("images/bg2.jpg");
  city_img = loadImage ("images/bg3.jpg");
  shooter_img = loadImage("images/shooter.png");
  fort_img = loadImage("images/forest.png");
  fgt_img = loadImage("images/fighter.png");
  zombie_img = loadImage("images/animated zombie.png");

}

function setup() {
  createCanvas(displayWidth*3,displayHeight);

 ground = createSprite(600,displayHeight,displayWidth,20);
 shooter = createSprite(180,displayHeight-80,50,50);
 

page = new Page ();
page.display();

}

function draw() {
background("blue");
image(finalbackground_img,0,0,displayWidth*3,displayHeight);

spawnObstacle();
  drawSprites();

 camera.position.x = shooter.x;  
 camera.position.y = shooter.y;
 
}

function keyPressed(){

  if(keyCode === 39){

    shooter.x += 3; 

    console.log(shooter.x);
  }
if(keyCode === 37){


shooter.x -= 3 ; 


}
if(keyCode === 40){


  shooter.y += 3 ; 
  
  
  }

  if(keyCode === 38){


    shooter.y -= 3 ; 
    
    
    }



}
function spawnObstacle (){

  if(frameCount % 200 === 0){
   
    var obsatcle = createSprite(displayWidth+50,displayHeight,50,50);
    var rand = random((displayHeight/4)*3,displayHeight);
    obsatcle.y = rand ;
    obsatcle.velocityX = -5 ;
    obsatcle.addImage(zombie_img);
    

  } 







}






