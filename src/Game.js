class Game{
    constructor(){
        this.background = new Background();
        this.figurant = new Figurant();
        this.player = new Player();
        this.obstacles = [];
        this.presents = [];

        // Properties game
        this.level = 1; 
        this.score = 0;
        this.lives = 7;
        this.starts = false;
    }

    // Setup background
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

    reset(){
        clear();
        frameCount = 0;
        this.figurant = new Figurant();
        this.obstacles = [];
        this.presents = [];

        // Properties game
        this.level = 1; 
        this.score = 0;
        this.lives = 7;
        this.starts = false;
    }

    // Game over
    gameOver(){
        this.reset();
        song.stop()

        game.starts = false;
        gameDiv.style.display = 'none';
        gameOverDiv.style.display = 'flex';
    }

    youWin(){
        this.reset();

        game.starts = false;
        gameDiv.style.display = 'none';
        gameWinDiv.style.display = 'flex';
    }




    draw(){
        // draw functions
        this.background.draw();
        this.figurant.draw();
        this.player.draw(); 


        // Text border
        textSize(26);
        textFont('Courier New');
        text(`${this.score}`,60,40);
        fill(255,250,250);
        image(presentsPic[1],10,10, 40,40)
        image(heart,10,50, 40,40)
        text(`${this.lives}`, 60,80)

        /// SPECIFYING LEVELS
        if(frameCount >= 1400 && frameCount < 1500){
            fill(255);
            textAlign(CENTER);
            textSize(40);
            text('Congratulations you made it to level 2!' , width/2, height/2);          
        }
        if(frameCount === 1500){
            this.level = 2;
        }

        if(frameCount >= 2900 && frameCount < 3000){
            fill(255);
            textAlign(CENTER);
            textSize(40);
            text('Congratulations you made it to level 3!' , width/2, height/2);          
        }
        if(frameCount === 3000){
            this.level = 3;
        }
        if (frameCount === 4980){
            this.youWin();
        }

        /// OBSTACLE TIME
        // Adding new Obstacle each x seconds (60 per second)
        const count = 130 + Math.floor(random(-20,80));
        //const count = 160;
        if(frameCount % count === 0){ // 2 seconds
            const r = Math.floor(random(0,obstaclesPic.length));
            const newObs = new Obstacle(r,this.level);
            this.obstacles.push(newObs);
        }


        /// For each obstracle in the obstacle array
        this.obstacles.forEach( (obstacle, index) => {
            // draw obstacle
            obstacle.draw();

            // //check if obstacle is out of canvas
            if(obstacle.x + obstacle.width <= offGrid){ // when zero, images are 'moving' 
                this.obstacles.splice(index, 1);
            }

            // Collision check and live checks
            if (this.collisionCheckFalse(obstacle, this.player)){
                if(!obstacle.touched){
                    collisionCat.play()
                    obstacle.touched = true;
                    if(this.lives > 1){
                        this.lives--;
                    } else {
                        this.gameOver();
                    }
                }   
            }  

        });


        /// PRESENT TIME 
        //const randomTime = Math.floor(random(90,150));
        //const randomTime = 150;
        const randomTime = Math.floor(random(120,190));
        if (frameCount % randomTime === 0){
            const rPic = Math.floor(random(0,presentsPic.length));
            const randomSpeed = random(0.5,2);
            this.presents.push(new Treats(rPic,randomSpeed,this.figurant.x - this.figurant.width/9,this.figurant.y + this.figurant.height/4));
        }
        // draw present
        this.presents.forEach((present, index) => {
            // draw each present
            present.draw();
            
            // check if present is out of canvas
            if(present.y >= HEIGHT + 100){
                this.presents.splice(index,1);
            }
            
            // collision check with presents
            if (this.collisionCheckTrue(this.player,present)) {
                collisionPresent.play();
                this.score++;
                if(this.score === presentsForLive){
                    newLife.play();
                    this.lives++
                    this.score = 0;
                }
                this.presents.splice(index,1);
            }
        });


        /// COLLISION WITH SANTA
        // reset santa's touched property
        if(!this.collisionCheckFalse(this.figurant, this.player) && this.figurant.touched){
            this.figurant.touched = false;
        }
        if(this.collisionCheckFalse(this.figurant, this.player)){
            if(!this.figurant.touched){
                collisionCat.play();
                this.figurant.touched = true;
                
                if(this.lives > 1){
                    this.lives--; 
                } else {
                    this.gameOver();
                }
            }
        }
    }

}