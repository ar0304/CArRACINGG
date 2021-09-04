var database;
var gameState = 0 ;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var track,car1image,car2image,car3image,car4image

function preload(){
  track =loadImage("../images/track.jpg")
  car1image =loadImage("../images/car1.png")
  car2image =loadImage("../images/car2.png")
  car3image =loadImage("../images/car3.png")
  car4image =loadImage("../images/car4.png")
}
function setup(){
  database = firebase.database();
  createCanvas(displayWidth-50,displayHeight-40);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState===2){
    game.end()
  }
}
