
//class game
class Game {

    //class properties
    foundCircles = 0;
    totalCircles = 0; 
    numbeOfCircle = 25;
    defaultColor = "#000";
    searchColor = "#99FF00"; //green
    normalColor = "#7700AA"; //purple
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor(){

        for(let i = 0; i < this.numbeOfCircle; i++){
            //create circles
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            //add a class for each circle
            newCircle.classList.add("gameCircle");

            //set attributes
            newCircle.setAttribute("cx", Math.random() * 400);
            newCircle.setAttribute("cy", Math.random() * 400);
           

            //randomly choose what reveal color the circle is
            if (Math.random() < 0.3){
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            }else {
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            //mouse event
            //on mouse over, show the hidden color
            newCircle.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
                
            })

            //on mouse out, set the color back to default color color
            newCircle.addEventListener("mouseout", (event) => {
                event.target.style.fill = this.defaultColor;
            })


            newCircle.addEventListener("click", (event) => {
                //if it matches the color we are looking for, remove it
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    //store how many have been clicked on
                    this.foundCircles++;
                   
                    //update the found UI
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            //add the circle to screen
            this.gameZone.appendChild(newCircle);


        }
    }

}


class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 120;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.maxSize * this.percent);
    }
}


let g = new Game();