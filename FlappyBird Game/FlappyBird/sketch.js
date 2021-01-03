var Bird, Bird_Falling, Bird_Rising, BirdIMG, Bird_FallingIMG, Bird_RisingIMG;

var Pipes,Pipe1IMG, Pipe2IMG, Pipe1, Pipe2, PipesGroup;

var BackGround, BackGroundIMG;

var GameOver, Reset, GameOverIMG, ResetIMG;

var Start, StartIMG;

var lives; 

var gameState=PLAY;

var PLAY=1;

var END=0;

var score = 0;

function preload(){

    BirdIMG= loadImage("Images/flappybird1.png");

    Bird_FallingIMG= loadImage("Images/Falling_Down.png");

    Bird_RisingIMG= loadImage("Images/flappybird2.png");

    BackGroundIMG= loadImage("Images/background.png");

    GameOverIMG= loadImage("Images/gameover.png");

    ResetIMG= loadImage("Images/reset.png");

    Pipe1IMG= loadImage("Images/pipes.png");

    Pipe2IMG= loadImage("Images/pipes2.png");

    StartIMG= loadImage("Images/start.png");
}

function setup(){
    createCanvas(1350,800);

    Bird= createSprite(200,400,20,20);
    Bird.addImage(BirdIMG);
    Bird.scale= 0.2;

    BackGround=createSprite(150,400,1350,800);
    BackGround.addImage(BackGroundIMG);
    BackGround.x=BackGround.width/2;
    BackGround.velocityX=-3;

    Reset= createSprite();
    Reset.addImage(ResetIMG);
    Reset.scale=0.75;

    Start= createSprite();
    Start.addImage(StartIMG);
    Start.scale= 0.6;

    GameOver= createSprite();
    Gameover.addImage(GameOverIMG);
    GameOver.scale= 0.7;
}


function draw(){

if(BackGround.x<0){
    BackGround.x=BackGround.width/2;
}
BackGround.velocityX=-3;

if(keyDown("space")){
Bird.velocityY=-11;
}
Bird.velocity = +5;
Bird.velocityX=0;

drawSprites();
}