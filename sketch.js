var banana,bananaG,banana_;
var stone,stoneG,stone_;
var monkey,monkey_running;
var ground,ground_;
var i1;
var score = 0;
var you_win;
var play=0;
var end=1;
var gameState= 0;

function preload()
{
 monkey_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  banana_ = loadImage("banana.png");
  stone_ = loadImage("stone.png");
  ground_=loadImage("jungle.jpg");
  you_win = loadImage("g.png")
  
}





function setup() {
  createCanvas(400, 400);

  
  ground=createSprite(-50,200,10,20);
  ground.addImage(ground_);
  ground.scale=0.9 ;
  ground.x=ground.width/2;
  
  monkey=createSprite(50,350,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.05; 
  monkey.addImage("win",you_win);
  
  bananaG=createGroup();
  stoneG=createGroup();
  
  i1=createSprite(50,350,400,20);
  i1.visible=false;
  
  }

 
function draw()
{
   background(200,300,400);
  
  drawSprites();     
         
if(gameState===0)
{
            //add gravity
            monkey.velocityY = monkey.velocityY + 0.8;
         
         
            stones();
            bananas();
            
          ground.velocityX = -(6+World.frameCount/300);
         
            if (ground.x < 0){
              ground.x = ground.width/2;
            }
          
           if(keyDown("space") && (monkey.y>=240) )
           {
              monkey.velocityY = -12 ;
       
            }
           
             monkey.collide(i1);
             
             if(monkey.isTouching(bananaG))
           {
          
            
             bananaG.destroyEach();
            score = score +2;
             
           }
           
           
           textSize(14);
               fill("white");
               text("score : " + score,160,150) ;
               
           
              if(monkey.isTouching(stoneG))
           {
             stoneG.destroyEach();
             bananaG.destroyEach();
            monkey.scale=0.1;
       }
 
  
  
  
  
   switch (score)
   {
   case 10:monkey.scale=0.1;
       break;
    case 20:monkey.scale=0.2;
       break;
    case 30:monkey.scale=0.3;
       break;
   case 40:monkey.scale=0.4;
       gameState=1;
   
      
       
       break;
       default: break;
         
   }    
       
       
       
   }
     
  if(gameState===1)
  {
       bananaG.setVelocityEach(0,0);
       stoneG.setVelocityEach(0,0);
       ground.velocityX=0;
       monkey.changeImage("win",you_win);
       monkey.x=200;
       monkey.y=200;
       monkey.scale=1.5;
        
  }
  
             
               
   
   
       
  
}
   
   
  

function stones () 
{
  if(frameCount % 300 === 0) {
    stone = createSprite(400,340,10,40);
  stone.velocityX = - (6+World.frameCount/300) ;
    
    stone.addImage(stone_);
    
              
    stone.scale = 0.2;
    stone.lifetime = 300;
 
    stoneG.add(stone);
  }
}

function bananas() 
{
  if( frameCount % 80=== 0) {
    var  banana = createSprite(400,340,10,40);
  banana.velocityX =  -(6+World.frameCount/300) ;
    
   banana.addImage(banana_);
    banana.y=random(200,350);
    //assign scale and lifetime to the obstacle           
   banana.scale = 0.05;
    banana.lifetime = 300;
    //add each obstacle to the group
    bananaG.add(banana);
  }
}



