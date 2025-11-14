"use strict";

const progressBar = document.querySelector(".scrollBar__progress");
if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);   
}
function updateScrollProgress(){
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const readPercentage = (currentScroll / maxScroll) * 100;
    if(currentScroll >= 0){
        progressBar.style.setProperty("--scrollbar-width", readPercentage + "%");
    }
}