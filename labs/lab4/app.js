gsap.from(".container", { x:-50, opacity: 0, ease: "power2.out", delay: 1.5});

let purpleBox = document.getElementsByClassName("purpleBox");

for(let i = 0; i < purpleBox.length; i++){
    gsap.from(purpleBox[i], {opacity: 0, delay: Math.random() + 1.7});

    purpleBox[i].addEventListener("mouseover", (event) => {
        event.target.innerHTML = i + 1;
        gsap.to(purpleBox[i], {duration: 0.7, rotation: 3,scale: 1.1});
        gsap.to(purpleBox[i], { backgroundColor: "#6732d1"});
    })

    purpleBox[i].addEventListener("click", (event) => {
        event.target.innerHTML = "";
        gsap.to(purpleBox[i], {duration: 0.7, rotation: 0, scale: 1});
        gsap.to(purpleBox[i], {backgroundColor: "rgb(154, 104, 200)"});
           
    })
}

