var gameState = 0;
var playercount;
var database;
var form, player, game;
var allplayers;
var distance = 0;
var car1,car2,car3,car4;
var cars;
var track,c1,c2,c3,c4;

function preload(){
track = loadImage("images/track.jpg")
c1 = loadImage("images/car1.png")
c2 = loadImage("images/car2.png")
c3 = loadImage("images/car3.png")
c4 = loadImage("images/car4.png")

}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
    if(playercount===4){
        game.update(1);
    }
    if(gameState===1){
     clear();
     game.play();
    }
    if(gameState===2){
        game.end();
    }
}
