
function preload() {
  //player
  bgImage = loadImage("/images/BG.jpg");
  player = loadImage("/images/Christmas Kitty.png");
  santa = loadImage("/images/Santa's slee.png");

  // create obstacles array elements
  obstaclesPic[0] = loadImage("/images/Tree.png");
  obstaclesPic[1] = loadImage("/images/Reindeer.png");
  obstaclesPic[2] = loadImage("/images/snowman.png");

  // create presents array
  presentsPic[0] = loadImage("/images/present1.png");
  presentsPic[1] = loadImage("/images/present2.png");
}

const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    game.setup();
    canvas.parent("canvas");
  }

function draw() {
  clear();
  game.draw();
}


function keyPressed(){
  if(keyCode === 32){ // spacebar 32
      game.player.jump();
  }
}