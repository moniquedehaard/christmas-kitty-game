class Game{
    constructor(){
        this.background = new Background();
        this.figurant = new Figurant();
        this.player = new Player();
        //this.obstacle = new Obstacle();
        this.obstacles = [];
        this.presents = [];
        this.score = 0;
    }

    setup(){
        this.background.setup();
    }

    // Player with obstacles ground
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

    // Player with presents
    collisionCheckTrue(player, treat){
        // player left from  obstacle
        if(player.x + player.width <= treat.x){
            return false
        }
        // obstacle is left from player
        if(treat.x + treat.width <= player.x){
            return false
        }
        // player is beneath obstacle
        if(player.y >= treat.y + treat.height){
            return false
        }
        if(player.y + player.height < treat.y){
            return false
        }
        return true;
    }



    draw(){
        this.background.draw();
        this.figurant.draw();
        this.player.draw(); 

        /// OBSTACLE TIME
        // Adding new Obstacle each x seconds (60 per second)
        //const count = 140 + Math.floor(random(-40,60));
        const count = 160;
        if(frameCount % count === 0){ // 2 seconds
            const r = Math.floor(random(0,obstaclesPic.length));
            this.obstacles.push(new Obstacle(r));
        }

        /// Draw each obstacle
        this.obstacles.forEach( (obstacle, index) => {
            obstacle.draw();
            
            // //check if obstacle is out of canvas
            // if(obstacle.x + obstacle.width <= offGrid){ // when zero, images are 'moving' 
            //     this.obstacles.splice(index, 1);
            // }

            // if (this.collisionCheckFalse(obstacle, this.player)){
            //     console.log("GAME OVERRRRR");
                   //noLoop();
            // }  

        });


        /// PRESENT TIME 
        //const randomTime = Math.floor(random(90,150));
        const randomTime = 150;
        if (frameCount % randomTime === 0){
            const rPic = Math.floor(random(0,presentsPic.length));
            const randomSpeed = random(0.5,2);
            this.presents.push(new Treats(rPic,randomSpeed,this.figurant.y+this.figurant.height/4));
        }
        // draw present
        this.presents.forEach((present, index) => {
            // draw each present
            present.draw();
            
            // check if present is out of canvas
            if(present.y >= HEIGHT + 100){
                this.presents.splice(index,1);
            }

            
            if (this.collisionCheckTrue(this.player,present)) {
                console.log('GOT THE PRESENT :D '); 
                this.score++;
                console.log(this.score);
                this.presents.splice(index,1);
            }
        });

    }

}