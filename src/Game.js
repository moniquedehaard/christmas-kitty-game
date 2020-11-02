class Game{
    constructor(){
        this.background = new Background();
        this.figurant = new Figurant();
        this.player = new Player();
        //this.obstacle = new Obstacle();
        this.obstacles = [];
        this.presents = [];
    }

    setup(){
        this.background.setup();
    }

    collisionCheck(player, obstacle){
        // player left from obstacle
        if(player.x + player.width <= obstacle.x){
            return false
        }
        // obstacle is left from player
        if(obstacle.x + obstacle.width <= player.x){
            return false
        }
        // player is above obstacle
        if(player.y >= obstacle.y + obstacle.height){
            return false
        }
        return true;
    }

    draw(){
        this.background.draw();
        this.figurant.draw();
        this.player.draw(); 

        // Adding new Obstacle each x seconds (60 per second)
        //const count = 140 + Math.floor(random(-40,60));
        const count = 160;
        if(frameCount % count === 0){ // 2 seconds
            const r = Math.floor(random(0,obstaclesPic.length));
            this.obstacles.push(new Obstacle(r));
        }

        // Draw each obstacle
        this.obstacles.forEach( (obstacle, index) => {
            obstacle.draw();
            
            // //check if obstacle is out of canvas
            // if(obstacle.x + obstacle.width <= offGrid){ // when zero, images are 'moving' 
            //     this.obstacles.splice(index, 1);
            // }

            // if (this.collisionCheck(obstacle, this.player)){
            //     console.log("GAME OVERRRRR");
            //     noLoop();
            // }  

        });

        /// PRESENT TIME 
        if (frameCount % 120 === 0){
            const rPic = Math.floor(random(0,presentsPic.length));
            const randomSpeed
            this.presents.push(new Treats(rPic));
        }
        this.presents.forEach((present, index) => {
            present.draw();
        });

    }

}