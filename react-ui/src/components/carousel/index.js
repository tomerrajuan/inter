import React from 'react';
import "./style.css";
/**
* @author
* @function Carousel
**/

const Carousel = (props) => {

    let d = document.getElementsByClassName("dish");
    let p = document.getElementsByClassName("point");
    let current = 0;
    let currentlyTransitioning = false;
    let timer;

    timer = setTimeout(moveDishes, 4000);
    getClickHandler();
    
    // for (var i = 0; i < d.length; i++) {
    //     d[i].addEventListener("click", function(e) {
    //         clearTimeout(timer);
    
    //         for (var i = 0; i < d.length; i++) {
    //             if (d[i] == e.target) {
    //                 break;
    //             }
    //         }
    //     });
    // }

    // first thing to do when the user clicks.

    for (var i = 0; i < p.length; i++) {
        p[i].addEventListener("click", getClickHandler(i));
    }

    function getClickHandler(n) {
        return function() {
            if (n === current) {
                return;
            }
            if (currentlyTransitioning) {
                return;
            }
            clearTimeout(timer);
            moveDishes(n);
        };
    }

    function moveDishes(arg) {
        for (i = 0; i < d.length; i++) {
            d[i].addEventListener("transitionend", function(e) {
                if (e.target.classList.contains("exit")) {
                    e.target.classList.remove("exit");
    
                    timer = setTimeout(moveDishes, 4000);
                    currentlyTransitioning = false;
                }

            });
        }
            currentlyTransitioning = true;
            d[current].classList.remove("onscreen");
            p[current].classList.remove("on");

            d[current].classList.add("exit");
           

            if (typeof arg != "undefined") {
                current = arg;
            } else {
                current++;
    
                if (current >= d.length) {
                    current = 0;
                }
            }
        d[current].classList.add("onscreen");
        p[current].classList.add("on");
    }


  return(
    <div className="food">
    <img className="dish onscreen" src="welcome2.jpg" alt="food" />
    <img className="dish" src="studio2.jpg" alt="food" />
    <img className="dish" src="studio3.jpg" alt="food" />
    <img className="dish" src="studio4.jpg" alt="food" />
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