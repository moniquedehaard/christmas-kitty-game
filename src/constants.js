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

// levels speed
let speed1 = 3;
let speed2 = 7;
let speed3 = 12;



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
