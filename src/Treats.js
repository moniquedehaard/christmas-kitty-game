class Treats {
    constructor(r, extraSpeed,santaPositionx, santaPositiony){
        this.x = santaPositionx;
        this.y = santaPositiony;
        this.width = 40;
        this.height = 40;
        this.image = r;

        this.extraSpeed = extraSpeed;

        this.gravity = 0.05; 
        this.velocity = 0;
    }

    draw(){
        //rect(this.x, this.y, this.width, this.height)
        image(presentsPic[this.image], this.x, this.y, this.width, this.height);
        //this.velocity += this.gravity;
        //this.x -= this.velocity;
        
        this.x -= random(0,4)
        //this.y += 0.5;
        this.y += (0.8*this.extraSpeed);
    }
}