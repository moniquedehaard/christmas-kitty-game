class Figurant{
    constructor(){
        this.x = 750;
        this.y = 40;
        this.width = 200;
        this.height = 80;

        this.top = 30;
        this.floor = 60; // hanging in air
        this.direction = 'down';
    }

    draw(){
        // LEVEL: FLOOR -> to stay on the floor
        if (this.direction === 'down'){
            this.y = this.y + random(0,0.5);
        }
        if (this.direction === 'up'){
            this.y = this.y - random(0,0.5);
        }
        if (this.y >= this.floor){
            this.direction = 'up';
        }
        if (this.y <= this.top && this.direction === 'up'){
            this.direction='down';
        }

        image(santa, this.x, this.y, this.width, this.height);
    }
    
}