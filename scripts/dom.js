
// var firstWorkplaceHeading = document.querySelector('.workplace:first-child');

var homeSections = document.getElementsByClassName("home-section")

changeBackgroundImg(0, "url(images/jatlo.jpg)");

function changeBackgroundImg(elementIndex, bgImage){
    homeSections[elementIndex].style.backgroundImage = bgImage;
}

console.log(homeSections[0].style.backgroundColor)