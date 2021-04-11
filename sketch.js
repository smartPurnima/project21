var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
   
}


function setup(){
    canvas = createCanvas(850,500);

    block1 = createSprite(0,480,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(317,480,220,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 
    block3 = createSprite(549,480,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(773,480,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,790),100, 40,40);
    ball.shapeColor = "white";
    //write code to add velocityX and velocityY
    ball.velocityY = 5;
    ball.velocityX = 6 ;
}

function draw() {
    background(0,0,0);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       // music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
         ball.velocityY = 0;
         ball.velocityX = 0;
        //write code to stop music
        
    }

    //write code to bounce off ball from the block3
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
         ball.shapeColor = "green";
     }

    //write code to bounce off ball from the block4
     if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";

     }

    drawSprites();
}
