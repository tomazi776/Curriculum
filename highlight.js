/** @type {HTMLElement} */

var devText = document.querySelector('#dev');
const photoText = document.getElementById('photo');

const devBgContainer = document.getElementsByClassName('developer-portfolio')[0]
const devContainerOverlay = document.getElementsByClassName('developer-portfolio-overlay')[0]
const devOverlayPic = document.getElementsByClassName('dev-overlay-pic')[0]

const photoBgContainer = document.getElementsByClassName('photographer-portfolio')[0]
const photoContainerOverlay = document.getElementsByClassName('photo-portfolio-overlay')[0]
const photoOverlayPic = document.getElementsByClassName('photo-overlay-pic')[0]


console.log(devText)
console.log(photoText)
console.log(devBgContainer)
console.log(photoBgContainer)

devBgContainer.addEventListener("mouseover", highlightDevText);
devBgContainer.addEventListener("mouseout", fadeDevText);

photoBgContainer.addEventListener("mouseover", highlightPhotoText)
photoBgContainer.addEventListener("mouseout", fadePhotoText);

function highlightDevText(){

    // if (element == "dev"){

        devContainerOverlay.style.transition = "1s"
        devContainerOverlay.style.backgroundColor = "black";
        devContainerOverlay.style.opacity = 0.6

        devOverlayPic.style.opacity = 1
        
        devText.style.transition = "1s";
        devText.style.opacity = 1
        devText.style.textShadow = "2px 2px 8px rgb(0,0,0,0.9)"
    // }
    // else {
    // }

}

function highlightPhotoText(){

        photoOverlayPic.style.opacity = 1

        photoContainerOverlay.style.transition = "1s"
        photoContainerOverlay.style.backgroundColor = "black";
        photoContainerOverlay.style.opacity = 0.6
        
        photoText.style.transition = "1s";
        photoText.style.opacity = 1
        photoText.style.textShadow = "2px 2px 8px rgb(0,0,0,0.9)"
}

function fadeDevText(){

    // if(element == "dev"){
        devContainerOverlay.style.backgroundColor = "";
        // devContainerOverlay.style.opacity = 0

        devOverlayPic.style.opacity = 0.5
        devOverlayPic.style.transition = "1s"

        devText.style.opacity = 0.5
        devText.style.textShadow = "0px 0px 0px rgba(0,0,0,.6)"
    // }
    // else{
    // }

}

function fadePhotoText(){


        photoContainerOverlay.style.backgroundColor = "";
        // devContainerOverlay.style.opacity = 0
        photoOverlayPic.style.opacity = 0.4
        photoOverlayPic.style.transition = "1S"

        photoText.style.opacity = 0.4
        photoText.style.textShadow = "0px 0px 0px rgba(0,0,0,.6)"
}

// devContainer.addEventListener("mouse")

// devText.style.opacity = 0.9
// photoText.style.opacity = 0.9
