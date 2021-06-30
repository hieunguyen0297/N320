
//create class drop for rain
class Rain {
    constructor(){
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * -2000); 
        this.radius = 12;
        this.yVelocity = 4;
    }

    rainFall(){
        this.y += this.yVelocity;
    }

    showRain(){
        fill([200, 221, 230]);
        circle(this.x, this.y, this.radius);
    }

}


//create a class for ground
class Ground {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.blue = 13;
    }


    showGround(){
        fill([2, 10, this.blue]);
        rect(this.x, this.y, this.width, this.height);
    }
}




//make an empty array of rain drop
let raindrops = [];

//instantiate the rain object
for(let i = 0; i < 100; i++){
    raindrops[i] =  new Rain();
}



//instantiate the ground object
let ground = new Ground(0, 560, 800, 40)




function setup(){
    createCanvas(800, 600);
}


//make a counter start at 0 to track rain drops 
let counter = 0;

function draw(){
    background([79, 97, 107]);

    for(let i = 0; i < raindrops.length; i++ ){
        //the rain drop will disappear after it hit the ground surface
        if(raindrops[i].y < ground.y){
            raindrops[i].showRain();
            raindrops[i].rainFall();
            
        }
    
        if(raindrops[i].y >= ground.y && counter <= 10){
           
            counter += 1;
            text('HIT',raindrops[i].x, raindrops[i].y);
            textSize(30);
            raindrops[i].y = Math.random() * -2000;
            // console.log(counter);
           
            
        }else if(counter == 10) {
            //i just want to reset the ground color to a smaller number
            //after it reached over 255
            if(ground.blue > 255){
                ground.blue = 220;
            }else{
                ground.blue += 15; 
            }
            counter = 0;
        }
    }
    
    //show the ground
    ground.showGround();
    
}