class Player{
    constructor(){
        this.x = 100;
        this.y = 400;
        this.width = 100;
        this.height = 80;

        // for jumping
        this.floor = floor;
        this.gravity = gravity; 
        this.velocity = 0;
        this.countJump = 0; 
    }

    jump(){ 
        if (this.countJump === maxNumberOfJumps){
            return
        }
        this.y -= jumpSize; 
        this.countJump++;
        this.velocity -= 3;
    }

    draw(){
        this.velocity += this.gravity;
        this.y += this.velocity;
    
        if(this.y >= this.floor){
            this.y = this.floor;
            this.countJump = 0;
            this.velocity = 0;
        }
        //rect(this.x, this.y, this.width, this.height)
        image(player, this.x, this.y, this.width, this.height);
    }
}