class Background{
    constructor(){
        this.x = 0;
        //this.level = 1;
    }

    setup(){
        this.height = HEIGHT;
        this.width = WIDTH;
    }

    draw(){
        // if (this.level === 1){
        //     this.x -= speed1;
        // }
        // if (this.level === 2){
        //     this.x -= speed2;
        // }
        // if (this.level === 3){
        //     this.x -= speed3;
        // }

        this.x -= 3;
        
        // two images, one 0,0, two on  0,width
        image(bgImage, this.x, 0, this.width, this.height);
        image(bgImage, this.x + this.width, 0 , this.width, this.height);

        if (this.x <= -this.width){ // when image is complety off the canvas
            this.x = 0
        } 
    }
}