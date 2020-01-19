/** @type {HTMLElement} */
const photoText = document.getElementById('photo');

const devText = document.getElementById('dev');

const devBgContainer = document.getElementsByClassName('developer-portfolio')[0]
const devContainerOverlay = document.getElementsByClassName('developer-portfolio-overlay')[0]
const devOverlayPic = document.getElementsByClassName('dev-overlay-pic')[0]

const photoBgContainer = document.getElementsByClassName('photographer-portfolio')[0]
const photoContainerOverlay = document.getElementsByClassName('photo-portfolio-overlay')[0]
const photoOverlayPic = document.getElementsByClassName('photo-overlay-pic')[0]


console.log(devText)
console.log(photoText)
console.log(devBgContainer)
console.log(devContainerOverlay)
console.log(devOverlayPic)
console.log(photoBgContainer)
console.log(photoContainerOverlay)
console.log(photoOverlayPic)

devBgContainer.addEventListener("mouseover", highlightDevText);
devBgContainer.addEventListener("mouseout", fadeDevText);

photoBgContainer.addEventListener("mouseover", highlightPhotoText)
photoBgContainer.addEventListener("mouseout", fadePhotoText);

function highlightDevText(){

        devContainerOverlay.style.transition = "0.7s"
        devContainerOverlay.style.backgroundColor = "black"
        devContainerOverlay.style.opacity = 0.8

        devOverlayPic.style.opacity = 1
        devOverlayPic.style.transition = "1s"
        
        devText.style.transition = "1s"
        devText.style.opacity = 1
        devText.style.textShadow = "2px 2px 8px rgb(0,0,0,0.9)"
}

function fadeDevText(){

        devContainerOverlay.style.transition = "0.7s"
        devContainerOverlay.style.backgroundColor = "black"
        devContainerOverlay.style.opacity = 0.5

        devOverlayPic.style.opacity = 0.5
        devOverlayPic.style.transition = "1s"

        devText.style.transition = "1s"
        devText.style.opacity = 0.5
        devText.style.textShadow = "0px 0px 0px rgba(0,0,0,.6)"
}


function highlightPhotoText(){

    photoContainerOverlay.style.transition = "0.7s"
    photoContainerOverlay.style.backgroundColor = "black"
    photoContainerOverlay.style.opacity = 0.85

    photoOverlayPic.style.opacity = 1
    
    photoText.style.transition = "1s"
    photoText.style.opacity = 1
    photoText.style.textShadow = "2px 2px 8px rgb(0,0,0,0.9)"
}

function fadePhotoText(){

    photoContainerOverlay.style.transition = "0.7s"
    photoContainerOverlay.style.backgroundColor = "black"
    photoContainerOverlay.style.opacity = 0.6

    photoOverlayPic.style.opacity = 0.5
    photoOverlayPic.style.transition = "1s"

    photoText.style.transition = "1s"
    photoText.style.opacity = 0.5
    photoText.style.textShadow = "0px 0px 0px rgba(0,0,0,.6)"
}
