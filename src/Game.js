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

    collisionCheckFalse(player, obstacle){
        // player left from obstacle
        if(player.x + player.width <= obstacle.x + lag){
            return false
        }
        // obstacle is left from player
        if(obstacle.x + obstacle.width <= player.x + lag){
            return false
        }
        // player is above obstacle
        if(player.y + lag >= obstacle.y + obstacle.height){
            return false
        }
        return true;
    }

    collisionCheckTrue(player, obstacle){
        // player left from obstacle
        if(player.x + player.width <= obstacle.x + lag){
            return false
        }
        // obstacle is left from player
        if(obstacle.x + obstacle.width <= player.x + lag){
            return false
        }
        // player is above obstacle
        if(player.y + lag >= obstacle.y + obstacle.height){
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
            
            //check if obstacle is out of canvas
            if(obstacle.x + obstacle.width <= offGrid){ // when zero, images are 'moving' 
                this.obstacles.splice(index, 1);
            }

            if (this.collisionCheckFalse(obstacle, this.player)){
                console.log("GAME OVERRRRR");
                noLoop();
            }  

        });

        /// PRESENT TIME 
        const randomTime = Math.floor(random(90,150));
        if (frameCount % randomTime === 0){
            const rPic = Math.floor(random(0,presentsPic.length));
            const randomSpeed = random(0.5,2);
            this.presents.push(new Treats(rPic,randomSpeed,this.figurant.y+this.figurant.height/4));
        }
        this.presents.forEach((present, index) => {
            present.draw();
        });

    }

}