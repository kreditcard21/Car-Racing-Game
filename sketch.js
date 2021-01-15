var database;
var gamestate;
var playercount=0;
var game;
var player;
var form;
var allplayers;
var car1, car2, car3, car4, cars=[];
var formimage;
var car1img, car2img, car3img, car4img, trackimg, groundimg;
var endimg;
var rank;

function preload(){
    formimage=loadImage("images/firstpageimage.jpg");
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");
    trackimg=loadImage("images/track.jpg");
    groundimg=loadImage("images/ground.png");
    endimg=loadImage("images/endimage.jpg");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-200);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();


}

function draw(){
    background("white");
    if(gamestate===0){
        background(formimage);
    }
    if(playercount===4){
        game.updateState(1);

    }
    if(gamestate===1){
        clear();
        game.play();
    }
    if(gamestate===2){
        
        clear();
        background(endimg);
        game.end();
  
    }
    
}

