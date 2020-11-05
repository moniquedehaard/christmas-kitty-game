
///// GAME/////
const game = new Game();

/////// Landing page //////
const gameDiv = document.querySelector(".game");
const button = document.getElementById('btn');

button.addEventListener('click', function() { 
  gameDiv.style.position = 'absolute';
  game.starts = true;
})


////// Game //////
 function preload() {
  //player
  bgImage = loadImage("./images/BG.jpg");
  player = loadImage("./images/Christmas Kitty.png");
  santa = loadImage("./images/Santa's slee.png");
  heart =loadImage("./images/heart.png");

  // create obstacles array elements
  obstaclesPic[0] = loadImage("./images/Tree.png");
  obstaclesPic[1] = loadImage("./images/Reindeer.png");
  obstaclesPic[2] = loadImage("./images/snowman.png");

  // create presents array
  presentsPic[0] = loadImage("./images/present1.png");
  presentsPic[1] = loadImage("./images/present2.png");
}


function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    game.setup();
    canvas.parent("canvas");
  }

function draw() {
  clear();
  if(game.starts){
    game.draw();
  }
}


function keyPressed(){
  if(keyCode === 32){ // spacebar 32
      game.player.jump();
  }
}