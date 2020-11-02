class Obstacle{
    constructor(rand){
        this.x = 1000;
        this.y = 310;
        this.width = 100;
        this.height = 130;
        this.image = rand; // number
    }

    draw(){
        //rect(this.x, this.y, this.width, this.height)
        image(obstaclesPic[this.image], this.x, this.y, this.width, this.height);
        this.x -= 3;
    }
}