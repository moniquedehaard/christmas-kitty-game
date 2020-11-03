class Figurant{
    constructor(){
        this.x = 750;
        this.y = 40;
        this.width = 200;
        this.height = 80;

        this.touched = false;

        this.top = 30;
        this.floor = 60; // hanging in air
        this.directionY = 'down';
        this.directionX = 'right'
    }

    draw(){
        // LEVEL: FLOOR -> to stay on the floor
        if (this.directionY === 'down'){
            this.y = this.y + random(0,0.5);
        }
        if (this.directionY === 'up'){
            this.y = this.y - random(0,0.5);
        }
        if (this.y >= this.floor){
            this.directionY = 'up';
        }
        if (this.y <= this.top && this.directionY === 'up'){
            this.directionY='down';
        }


        // Moving left to right
        if(this.directionX === 'right'){
            this.x+= random(0,0.5);
        }
        if(this.directionX === 'left'){
            this.x -= random(0,0.5);
        }
        if(this.x <= 200){
            this.directionX = 'right';
        }
        if(this.x+ this.width >= 950){
            this.directionX = 'left'
        }
        image(santa, this.x, this.y, this.width, this.height);
    }
    
}