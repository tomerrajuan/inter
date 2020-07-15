import React from 'react';
import "./style.css";



const Carousel = (props) => {

    let image = document.getElementsByClassName("image");
    let point = document.getElementsByClassName("point");
    let current = 0;
    let currentlyTransitioning = false;
    let timer;
    
    timer = setTimeout(moveDishes, 4000);


    function moveDishes(arg) {

        console.log('moveDishes is called with arg: ',arg);
        for (let i = 0; i < image.length; i++) {
            image[i].addEventListener("transitionend", function(e) {
                if (e.target.classList.contains("exit")) {
                    e.target.classList.remove("exit");
                    timer = setTimeout(moveDishes, 4000);
                    currentlyTransitioning = false;
                }
            });
        }
            currentlyTransitioning = true;
            image[current].classList.remove("onscreen");
            image[current].classList.add("exit");
            point[current].classList.remove("on");
            
                current++;

                if (current >= image.length) {
                    current = 0;
                }
        image[current].classList.add("onscreen");
        point[current].classList.add("on");
    }


  return(
    <div className="images">
    <img className="image onscreen" src="welcome2.jpg" alt="" />
    <img className="image" src="studio2.jpg" alt="" />
    <img className="image" src="studio3.jpg" alt="" />
    <img className="image" src="studio4.jpg" alt="" />
     <div className="points">
        <div id="point0" className="point on"></div>
        <div id="point1" className="point"></div>
        <div id="point2" className="point"></div>
        <div id="point3" className="point"></div>
     </div>
    </div>
   )

 }

export default Carousel