class Obstacle{
    constructor(rand, level){
        this.x = 1000;
        this.y = 310;
        this.width = 100;
        this.height = 130;

        this.image = rand; // number

        this.touched = false;

        this.level = level; // for speed
    }

    draw(){
        //rect(this.x, this.y, this.width, this.height)
        image(obstaclesPic[this.image], this.x, this.y, this.width, this.height);

        if(this.level === 1){
            console.log(speed1)
            this.x -= speed1;
        }
        if(this.level === 2){
            console.log(this.x)
            this.x -= speed2;
        }
        if(this.level === 3){
            this.x -= speed3;
        }
        
    }
}