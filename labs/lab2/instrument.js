//Create instrument class
class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    //Create method play for this class
    play(){
        return `${this.family} ${this.verb} at ${this.loudness} loudness.`; 
    }
}


//Create child classes fro woodwind, percussion and string

class Woodwind extends Instrument {
    constructor(loudness){
        super(loudness);
        this.family = "Oboe";
        this.verb = "blows";
    }
} 


class Percussion extends Instrument {
    constructor(loudness){
        super(loudness);
        this.family = "Bass Drum";
        this.verb = "hits";
    }
}


class String extends Instrument {
    constructor(loudness){
        super(loudness);
        this.family = "Violin";
        this.verb = "plays";
    }
}


//Make an array to store instruments

let instruments = [];

//Make new instance of each class and put them into an the above array

instruments[0] = new Woodwind(0.5);
instruments[1] = new Percussion(0.9);
instruments[2] = new String(0.4);



//Loop through the array and call play method
for(let i = 0; i < instruments.length; i++){
    console.log(instruments[i].play());
}
