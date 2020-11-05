// Dimensions canvas
let WIDTH = 1000;
let HEIGHT = 500;

// images
let bgImage;
let player;
let santa; // == figurant
let obstaclesPic = [];
let presentsPic = [];
let heart;

// song
let song;
let collisionCat;


// LEVELS
// Level 1
let speed1 = 5;

// Level 2
let speed2 = 10;

// Level 3
let speed3 = 15;



////// SETTINGS OF GAME /////
// Floor, where player and objects should 'walk'
let floor = 350; 
let offGrid = -500;
let lag = 20;
let presentsForLive = 10;


//// SETTINGS OF CHARACTER////
let gravity = 0.1 ;
let jumpSize = 100;
let maxNumberOfJumps = 2;

//// SETTINGS OF OBSTACLES ///
let obstacleWidth = 80;
let obstacleHeight = 100;





////// DIFFERENT LANDING PAGES WITH DOMMANITPULATION//////
// start game - landing page
const landingPageDiv = document.querySelector(".landingPage")

// Start game 
const gameDiv = document.querySelector(".game");

// game over 
const gameOverDiv = document.querySelector(".gameOver");

// you win
const gameWinDiv = document.querySelector(".gameWinning")


// Start game button
const buttonStart = document.getElementById('btn')

buttonStart.addEventListener('click', function() { 
  landingPageDiv.style.display = 'none';
  gameDiv.style.display = 'flex';
  song.play();
  game.starts = true;
})


// Re-play button
const buttonReplay = document.querySelectorAll('.restartGame');

buttonReplay.forEach((button) => {
  button.addEventListener('click', function() {
    song.play();
    gameOverDiv.style.display = 'none';
    gameWinDiv.style.display = 'none';
    gameDiv.style.display = 'flex';
    game.starts = true;
  })
})