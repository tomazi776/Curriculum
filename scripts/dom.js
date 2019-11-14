
// var workplaceHeader = workplace[0].getElementsByClassName('workplace-heading')
// workplace[1].getElementsByClassName('workplace-heading')
// function getWorkplaceHeaders(){
//     for 
// }

// var firstWorkplaceHeading = document.querySelector('.workplace:first-child');

var homeSections = document.getElementsByClassName("home-section")

changeBackgroundImg(0, "url(images/jatlo.jpg)");

function changeBackgroundImg(elementIndex, bgImage){
    homeSections[elementIndex].style.backgroundImage = bgImage;
}

console.log(homeSections[0].style.backgroundColor)