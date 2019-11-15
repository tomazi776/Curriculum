/** @type {HTMLElement} */

var devText = document.querySelector('#dev');
const photoText = document.getElementById('photo');
const devBgContainer = document.getElementsByClassName('developer-portfolio')[0]
const devContainerOverlay = document.getElementsByClassName('developer-portfolio-overlay')[0]
const photoContainer = document.getElementsByClassName('photographer-portfolio')[0]
console.log(devText)
console.log(photoText)
console.log(devBgContainer)
console.log(photoContainer)



devBgContainer.addEventListener("mouseover", highlightText);
devBgContainer.addEventListener("mouseout", fadeText);

function highlightText(){

    devContainerOverlay.style.transition = "1s"
    devContainerOverlay.style.backgroundColor = "black";
    devContainerOverlay.style.opacity = 0.3
    

    // devContainerOverlay.style.backgroundColor = "black"
    // devContainerOverlay.style.opacity = 0.3
    // devText.style.zIndex = 2;
    devText.style.transition = "1s";
    devText.style.opacity = 1
    devText.style.textShadow = "2px 2px 8px rgb(0,0,0,0.9)"
}

function fadeText(){
    devContainerOverlay.style.backgroundColor = "";
    // devContainerOverlay.style.opacity = 0

    devText.style.opacity = 0.5
    devText.style.textShadow = "0px 0px 0px rgba(0,0,0,.6)"
}

// devContainer.addEventListener("mouse")

// devText.style.opacity = 0.9
// photoText.style.opacity = 0.9
